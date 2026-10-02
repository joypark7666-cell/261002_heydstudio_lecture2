/* global React */
const DS_PF2 = window.HeyDPageDesignSystem_d9d450;

function Portfolio2() {
  const { Badge, Card } = DS_PF2;
  const PER_PAGE = 6; // 한 페이지에 보여줄 포트폴리오 수
  const fallbackCats = ["전체", "IR", "제안서", "소개서", "발표"];
  const [cat, setCat] = React.useState("전체");
  const [page, setPage] = React.useState(1);
  // 노션 연동 전 기본 항목 — covers are <image-slot> drop zones
  const fallback = [
    { id: "pf-ir-a", title: "투자 유치 IR 피치덱", tag: "IR" },
    { id: "pf-prop-a", title: "가맹 제안서", tag: "제안서" },
    { id: "pf-intro-a", title: "회사 소개서", tag: "소개서" },
    { id: "pf-talk-a", title: "컨퍼런스 발표 자료", tag: "발표" },
    { id: "pf-ir-b", title: "피치덱 리디자인", tag: "IR" },
    { id: "pf-intro-b", title: "제품 소개서", tag: "소개서" },
  ];
  const [remote, setRemote] = React.useState(null);
  const [open, setOpen] = React.useState(null); // 라이트박스에 띄울 항목
  const overlayRef = React.useRef(null);

  React.useEffect(() => {
    fetch("/api/portfolio")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        if (d.items && d.items.length) setRemote(d.items);
      })
      .catch(() => {}); // 로컬 미리보기 등 함수 없는 환경에서는 fallback 유지
  }, []);

  const items = remote || fallback;
  const cats = remote
    ? ["전체", ...[...new Set(items.map((i) => i.tag).filter(Boolean))]]
    : fallbackCats;
  const shown = cat === "전체" ? items : items.filter((i) => i.tag === cat);

  // ── 페이지네이션 (6개씩) ──
  const pageCount = Math.max(1, Math.ceil(shown.length / PER_PAGE));
  const safePage = Math.min(page, pageCount);
  const paged = shown.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);
  const pickCat = (c) => { setCat(c); setPage(1); };
  const goPage = (n) => {
    setPage(n);
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ── 라이트박스 이전/다음 (필터된 전체 목록 기준, 페이지 무관) ──
  const openIdx = open ? shown.findIndex((i) => i.id === open.id) : -1;
  const goItem = (delta) => {
    const next = shown[openIdx + delta];
    if (next) {
      setOpen(next);
      if (overlayRef.current) overlayRef.current.scrollTop = 0;
    }
  };

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      else if (e.key === "ArrowRight") goItem(1);
      else if (e.key === "ArrowLeft") goItem(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, openIdx]);

  // 갤러리 항목 정규화: 구버전 문자열(이미지 URL) ↔ 신버전 {t:"img"|"text"}
  const galleryOf = (it) => {
    const raw = it.gallery && it.gallery.length ? it.gallery : (it.image ? [{ t: "img", src: it.image }] : []);
    return raw
      .map((g) => (typeof g === "string" ? { t: "img", src: g } : g))
      .filter((g) => (g.t === "img" ? g.src : g.text));
  };

  const navBtnStyle = {
    position: "fixed", top: "50%", transform: "translateY(-50%)", zIndex: 1001,
    width: 46, height: 46, borderRadius: "50%", border: "1px solid rgba(255,255,255,.28)",
    background: "rgba(255,255,255,.1)", color: "#fff", fontSize: 22, cursor: "pointer",
    lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center",
    backdropFilter: "blur(4px)",
  };

  return (
    <section id="portfolio" className="heyd-pad" style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "104px 32px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 44 }}>
        <window.SectionHead label="포트폴리오" title="소개서와 제안서, 발표 자료까지." desc="클라이언트와 협업한 결과물을 살펴보세요." />
        {cats.length > 1 && (
          <div style={{ display: "flex", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
            {cats.map((c) => (
              <button key={c} onClick={() => pickCat(c)} style={{
                padding: "9px 16px", borderRadius: "var(--r-pill)", fontSize: 14, fontWeight: 600,
                cursor: "pointer", transition: "all .14s var(--ease-out)",
                background: cat === c ? "var(--brand-main)" : "transparent",
                color: cat === c ? "#fff" : "var(--text-muted)",
                border: cat === c ? "1px solid var(--brand-main)" : "1px solid var(--border-default)",
              }}>{c}</button>
            ))}
          </div>
        )}
      </div>

      <div className="heyd-portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
        {paged.map((it) => (
          <Card key={it.id} variant="default" padding={0} hover style={{ overflow: "hidden" }}>
            <div
              onClick={() => { if (it.image) setOpen(it); }}
              style={{ aspectRatio: "16/10", background: "var(--surface-brand-soft)", cursor: it.image ? "pointer" : "default" }}
            >
              {it.image ? (
                <img src={it.image} alt={it.title} loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              ) : (
                <image-slot id={it.id} shape="rect" placeholder="썸네일 이미지를 끌어다 놓으세요" style={{ width: "100%", height: "100%" }}></image-slot>
              )}
            </div>
            <div style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 17, letterSpacing: "-0.02em", color: "var(--text-strong)" }}>{it.title}</div>
                {it.note ? <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4, lineHeight: 1.5 }}>{it.note}</div> : null}
              </div>
              {it.tag ? <Badge tone="neutral">{it.tag}</Badge> : null}
            </div>
          </Card>
        ))}
      </div>

      {/* 페이지네이션 — 7개 이상일 때만 표시 */}
      {pageCount > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 40 }}>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <button key={n} onClick={() => goPage(n)} aria-label={`${n}페이지`} style={{
              minWidth: 38, height: 38, padding: "0 8px", borderRadius: "50%",
              fontSize: 14.5, fontWeight: 600, cursor: "pointer",
              transition: "all .14s var(--ease-out)",
              background: safePage === n ? "var(--brand-main)" : "transparent",
              color: safePage === n ? "#fff" : "var(--text-muted)",
              border: safePage === n ? "1px solid var(--brand-main)" : "1px solid var(--border-default)",
            }}>{n}</button>
          ))}
        </div>
      )}

      {open && (
        <div
          ref={overlayRef}
          onClick={() => setOpen(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000, background: "rgba(15,18,26,.82)",
            display: "flex", flexDirection: "column", alignItems: "center",
            overflowY: "auto", padding: "48px 20px 64px", backdropFilter: "blur(6px)",
          }}
        >
          {/* 이전/다음 포트폴리오 화살표 — 콘텐츠(이미지) 양옆에 위치, 좁은 화면에선 가장자리로 */}
          {openIdx > 0 && (
            <button onClick={(e) => { e.stopPropagation(); goItem(-1); }} aria-label="이전 포트폴리오"
              style={{ ...navBtnStyle, left: "max(10px, calc(50% - 624px))" }}>‹</button>
          )}
          {openIdx >= 0 && openIdx < shown.length - 1 && (
            <button onClick={(e) => { e.stopPropagation(); goItem(1); }} aria-label="다음 포트폴리오"
              style={{ ...navBtnStyle, right: "max(10px, calc(50% - 624px))" }}>›</button>
          )}

          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(1080px, 100%)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 18 }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 20, letterSpacing: "-0.02em" }}>{open.title}</div>
                {open.note ? <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 14.5, marginTop: 6, lineHeight: 1.5 }}>{open.note}</div> : null}
              </div>
              <button onClick={() => setOpen(null)} aria-label="닫기" style={{
                width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(255,255,255,.25)",
                background: "rgba(255,255,255,.08)", color: "#fff", fontSize: 20, cursor: "pointer", lineHeight: 1, flex: "none",
              }}>×</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {galleryOf(open).map((g, i) =>
                g.t === "text" ? (
                  <p key={i} style={{
                    color: g.kind === "cap" ? "rgba(255,255,255,.78)" : "#fff",
                    fontSize: g.kind === "h" ? 21 : g.kind === "cap" ? 14 : 16,
                    fontWeight: g.kind === "h" ? 700 : 400,
                    lineHeight: 1.75,
                    margin: g.kind === "h" ? "12px 0 0" : g.kind === "cap" ? "-4px 0 6px" : 0,
                    whiteSpace: "pre-wrap", wordBreak: "keep-all", textWrap: "pretty",
                  }}>{g.text}</p>
                ) : (
                  <img key={i} src={g.src} alt={`${open.title} ${i + 1}`} loading="lazy"
                    style={{ width: "100%", borderRadius: 12, display: "block", boxShadow: "0 8px 32px rgba(0,0,0,.35)" }} />
                )
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
window.Portfolio2 = Portfolio2;
