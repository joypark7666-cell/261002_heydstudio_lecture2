/* global React */
const DS_NV2 = window.HeyDPageDesignSystem_d9d450;

// 강의 문의 페이지 공개 여부. false 이면 메뉴에서 빠지고 lecture.html 은 메인으로 이동한다.
// 다시 열 때: 이 값을 true 로 바꾸고, lecture.html 맨 위의 noindex 메타·redirect 스크립트도 지운다.
const SHOW_LECTURE = false;

function Nav2() {
  const { Button } = DS_NV2;
  // 현재 페이지는 경로로 판별 (/lecture, /lecture.html → 강의 문의, 그 외 → 디자인 문의)
  const onLecture = /lecture/.test(window.location.pathname);
  const links = [
    { label: "디자인 문의", href: "index.html", active: !onLecture },
    ...(SHOW_LECTURE ? [{ label: "강의 문의", href: "lecture.html", active: onLecture }] : []),
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,0.82)", backdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--border-subtle)",
    }}>
      <div className="heyd-nav-inner" style={{
        maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px", height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
      }}>
        <div style={{ fontWeight: 900, fontSize: 24, letterSpacing: "-0.03em", color: "var(--text-strong)" }}>
          heyd<span style={{ color: "var(--brand-main)" }}>.</span>
        </div>
        {links.length > 1 && <nav className="heyd-nav-links" aria-label="페이지 이동" style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} aria-current={l.active ? "page" : undefined} style={{
              padding: "8px 16px", borderRadius: "var(--r-pill)", fontSize: 15, lineHeight: 1,
              fontWeight: l.active ? 700 : 600, whiteSpace: "nowrap",
              color: l.active ? "var(--brand-main)" : "var(--text-muted)",
              background: l.active ? "var(--surface-brand-soft)" : "transparent",
            }}>{l.label}</a>
          ))}
        </nav>}
      </div>
    </header>
  );
}
window.Nav2 = Nav2;
