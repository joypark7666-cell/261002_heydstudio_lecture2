/* global React */
const DS_NV2 = window.HeyDPageDesignSystem_d9d450;

function Nav2() {
  const { Button } = DS_NV2;
  // 현재 페이지는 경로로 판별 (/lecture, /lecture.html → 강의 문의, 그 외 → 디자인 문의)
  const onLecture = /lecture/.test(window.location.pathname);
  const links = [
    { label: "디자인 문의", href: "index.html", active: !onLecture },
    { label: "강의 문의", href: "lecture.html", active: onLecture },
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
        <nav className="heyd-nav-links" aria-label="페이지 이동" style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} aria-current={l.active ? "page" : undefined} style={{
              padding: "8px 16px", borderRadius: "var(--r-pill)", fontSize: 15, lineHeight: 1,
              fontWeight: l.active ? 700 : 600, whiteSpace: "nowrap",
              color: l.active ? "var(--brand-main)" : "var(--text-muted)",
              background: l.active ? "var(--surface-brand-soft)" : "transparent",
            }}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
window.Nav2 = Nav2;
