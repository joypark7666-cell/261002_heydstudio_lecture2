/* global React */
const DS_NV2 = window.HeyDPageDesignSystem_d9d450;

function Nav2() {
  const { Button } = DS_NV2;
  const links = ["서비스", "진행 방식", "포트폴리오", "헤이디", "문의"];
  const targets = ["service", "how", "portfolio", "designer", "contact"];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,0.82)", backdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--border-subtle)",
    }}>
      <div style={{
        maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px", height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ fontWeight: 900, fontSize: 24, letterSpacing: "-0.03em", color: "var(--text-strong)" }}>
          heyd<span style={{ color: "var(--brand-main)" }}>.</span>
        </div>
      </div>
    </header>
  );
}
window.Nav2 = Nav2;
