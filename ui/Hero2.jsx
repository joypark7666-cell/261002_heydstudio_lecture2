/* global React */
const DS_H2 = window.HeyDPageDesignSystem_d9d450;

function Hero2() {
  const { Button, Badge, IconTile } = DS_H2;
  // floating tiles at the four corners, echoing the reference hero
  const tiles = [
    { icon: "presentation", tone: "brand", top: "14%", left: "16%", size: 74, delay: "0s" },
    { icon: "file-text", tone: "sub", top: "26%", right: "17%", size: 66, delay: "0.8s" },
    { icon: "bar-chart-3", tone: "point", top: "56%", left: "20%", size: 60, delay: "1.6s" },
    { icon: "layout-template", tone: "brand", top: "60%", right: "19%", size: 70, delay: "1.1s" },
  ];
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--surface-page)" }}>
      {/* concentric-circle backdrop */}
      <div aria-hidden style={{
        position: "absolute", left: "50%", bottom: "-620px", transform: "translateX(-50%)",
        width: 1200, height: 1200, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(1,57,238,0.16) 0%, rgba(1,57,238,0.10) 38%, rgba(1,57,238,0.05) 60%, rgba(1,57,238,0) 72%)",
      }} />
      {tiles.map((t, i) => (
        <div key={i} className="heyd-hero-tile" style={{ position: "absolute", top: t.top, left: t.left, right: t.right, animation: `heyd-float ${4.2 + i * 0.4}s var(--ease-in-out) ${t.delay} infinite` }}>
          <IconTile icon={t.icon} tone={t.tone} size={t.size} />
        </div>
      ))}
      <div className="heyd-hero-inner" style={{
        position: "relative", maxWidth: 900, margin: "0 auto", padding: "96px 32px 150px",
        textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 26,
      }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px",
          background: "var(--surface-brand-soft)", color: "var(--brand-main)",
          fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: "var(--fw-semibold)",
          letterSpacing: "var(--ls-normal)", borderRadius: "var(--r-pill)", lineHeight: 1,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--brand-main)", flex: "none" }} />
          전문가 1:1 맞춤 제작
        </span>
        <h1 className="heyd-hero-h1" style={{ fontSize: 52, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.25, color: "var(--text-strong)" }}>
          <span style={{ fontWeight: 600 }}>커리어의 중요한 순간,</span><br />
          <span style={{ color: "var(--brand-main)" }}>PPT는 전문가에게 맡기세요.</span>
        </h1>
        <p style={{ fontSize: 19, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 560 }}>
          투자 유치부터 경쟁 PT, 대규모 강연까지.<br />
          <span style={{ fontWeight: 700, color: "var(--text-body)" }}>중요한 순간의 PPT는 전문가와 함께 완성하세요.</span>
        </p>
        <div className="heyd-hero-btns" style={{ display: "flex", gap: 12, marginTop: 6 }}>
          <Button variant="primary" size="lg" iconRight="arrow-right" as="a" href="#order">의뢰 시작하기</Button>
          <a href="#portfolio" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "17px 34px", fontFamily: "var(--font-sans)", fontSize: "var(--fs-lg)",
            fontWeight: "var(--fw-semibold)", lineHeight: 1, borderRadius: "var(--r-pill)",
            background: "#fff", border: "none", color: "var(--text-strong)",
            cursor: "pointer", whiteSpace: "nowrap", textDecoration: "none",
            transition: "filter var(--dur-fast) var(--ease-out)",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(0.94)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; }}
          >포트폴리오 보기</a>
        </div>
        <div className="heyd-hero-stats" style={{ display: "flex", gap: 30, marginTop: 18, color: "var(--text-faint)", fontSize: 14, fontWeight: 500 }}>
          <span>실무 PPT 경력 8년</span>
          <span style={{ color: "var(--border-default)" }}>·</span>
          <span>기획부터 디자인까지 1:1 전담</span>
          <span style={{ color: "var(--border-default)" }}>·</span>
          <span>5.8만 기획·PPT 분야 크리에이터</span>
        </div>
      </div>
    </section>
  );
}
window.Hero2 = Hero2;
