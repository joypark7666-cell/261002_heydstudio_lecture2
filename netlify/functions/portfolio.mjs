// 노션 "포트폴리오 모음집" 데이터베이스를 읽어 포트폴리오 목록 JSON으로 반환.
// 각 항목 페이지 안의 첫 번째 이미지 = 썸네일, 나머지 = 상세(갤러리) 콘텐츠.
// 갤러리는 이미지+텍스트 블록을 노션에 쓴 순서 그대로 담는다 (텍스트는 사이트에서 흰색 표시).
// 필요한 환경변수 (Netlify 대시보드 > Site configuration > Environment variables):
//   NOTION_TOKEN  - 노션 내부 통합(integration) 시크릿 (ntn_... 또는 secret_...)
//   NOTION_DB_ID  - (선택) 데이터베이스 ID. 기본값: 포트폴리오 모음집

const DEFAULT_DB_ID = "3a071a693e5480899ad4e3c27637f2ca";

const notionHeaders = (token) => ({
  Authorization: `Bearer ${token}`,
  "Notion-Version": "2022-06-28",
  "Content-Type": "application/json",
});

async function queryDatabase(db, token) {
  const pages = [];
  let cursor;
  do {
    const res = await fetch(`https://api.notion.com/v1/databases/${db}/query`, {
      method: "POST",
      headers: notionHeaders(token),
      body: JSON.stringify({ page_size: 100, start_cursor: cursor }),
    });
    if (!res.ok) throw new Error(`query ${res.status}: ${await res.text()}`);
    const data = await res.json();
    pages.push(...data.results);
    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);
  return pages;
}

async function listBlocks(id, token) {
  const blocks = [];
  let cursor;
  do {
    const url = new URL(`https://api.notion.com/v1/blocks/${id}/children`);
    url.searchParams.set("page_size", "100");
    if (cursor) url.searchParams.set("start_cursor", cursor);
    const res = await fetch(url, { headers: notionHeaders(token) });
    if (!res.ok) throw new Error(`blocks ${res.status}`);
    const data = await res.json();
    blocks.push(...data.results);
    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);
  return blocks;
}

const blockImageUrl = (b) =>
  b.type === "image" ? (b.image.type === "external" ? b.image.external.url : b.image.file.url) : null;

// 텍스트 블록 → {t:"text", text, kind}. 제목류는 kind:"h", 나머지는 "p".
const TEXT_BLOCKS = {
  paragraph: "p", heading_1: "h", heading_2: "h", heading_3: "h",
  bulleted_list_item: "p", numbered_list_item: "p", quote: "p", callout: "p",
};
function blockText(b) {
  const kind = TEXT_BLOCKS[b.type];
  if (!kind) return null;
  const rich = (b[b.type] && b[b.type].rich_text) || [];
  const text = rich.map((t) => t.plain_text).join("");
  if (!text.trim()) return null;
  const prefix = b.type === "bulleted_list_item" ? "• " : "";
  return { t: "text", text: prefix + text, kind };
}

// 블록 하나 → 콘텐츠 항목 배열(이미지/텍스트/캡션, 없으면 빈 배열)
const blockContent = (b) => {
  const u = blockImageUrl(b);
  if (u) {
    const items = [{ t: "img", src: u }];
    // 이미지 캡션도 텍스트로 반영
    const cap = ((b.image && b.image.caption) || []).map((t) => t.plain_text).join("");
    if (cap.trim()) items.push({ t: "text", text: cap, kind: "cap" });
    return items;
  }
  const txt = blockText(b);
  return txt ? [txt] : [];
};

// 페이지 본문에서 이미지+텍스트를 순서대로 수집 (컬럼 레이아웃 1단계까지 탐색)
async function collectContent(pageId, token) {
  const out = [];
  const blocks = await listBlocks(pageId, token);
  for (const b of blocks) {
    const items = blockContent(b);
    if (items.length) { out.push(...items); continue; }
    if ((b.type === "column_list" || b.type === "column") && b.has_children) {
      const inner = await listBlocks(b.id, token);
      for (const c of inner) {
        const ci = blockContent(c);
        if (ci.length) out.push(...ci);
        else if (c.type === "column" && c.has_children) {
          for (const cc of await listBlocks(c.id, token)) {
            out.push(...blockContent(cc));
          }
        }
      }
    }
  }
  return out;
}

export default async () => {
  const token = process.env.NOTION_TOKEN;
  const db = process.env.NOTION_DB_ID || DEFAULT_DB_ID;
  if (!token) return Response.json({ error: "NOTION_TOKEN not set" }, { status: 500 });

  try {
    const pages = await queryDatabase(db, token);
    const metas = pages
      .map((p) => {
        const props = p.properties || {};
        let title = "", tag = "", order = null, visible = true, note = "";
        for (const v of Object.values(props)) {
          if (v.type === "title") title = (v.title || []).map((t) => t.plain_text).join("");
          else if (v.type === "select" && v.select) tag = v.select.name;
          else if (v.type === "number" && v.number !== null) order = v.number;
          else if (v.type === "checkbox") visible = v.checkbox;
          // 첫 번째 텍스트(rich_text) 속성 = 크레딧/설명 (예: "○○님과 함께 작업했습니다.")
          else if (v.type === "rich_text" && !note) note = (v.rich_text || []).map((t) => t.plain_text).join("");
        }
        const cover = p.cover
          ? p.cover.type === "external" ? p.cover.external.url : p.cover.file.url
          : "";
        return { id: p.id, title, tag, order, visible, note, cover, created: p.created_time };
      })
      .filter((m) => m.visible && m.title)
      .sort((a, b) => {
        if (a.order !== null && b.order !== null) return a.order - b.order;
        if (a.order !== null) return -1;
        if (b.order !== null) return 1;
        return a.created > b.created ? -1 : 1; // 최근에 추가한 항목이 앞에
      })
      .slice(0, 50);

    const items = await Promise.all(
      metas.map(async (m) => {
        let content = [];
        try { content = await collectContent(m.id, token); } catch (e) { /* 본문 없이 계속 */ }
        // 첫 번째 이미지 = 썸네일. 갤러리 = 그걸 뺀 나머지(텍스트+이미지, 노션 순서 그대로)
        const firstImgIdx = content.findIndex((b) => b.t === "img");
        const thumb = firstImgIdx >= 0 ? content[firstImgIdx].src : "";
        const gallery = firstImgIdx >= 0 ? content.filter((_, i) => i !== firstImgIdx) : content;
        return {
          id: m.id,
          title: m.title,
          tag: m.tag,
          note: m.note,
          image: thumb || m.cover || "",
          gallery,
        };
      })
    );

    return Response.json(
      { items: items.filter((it) => it.image) },
      // 노션 파일 URL 만료(약 1시간)보다 훨씬 짧게 캐시
      { headers: { "Cache-Control": "public, max-age=300" } }
    );
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 502 });
  }
};

export const config = { path: "/api/portfolio" };
