/* global React */
const DS_LH = window.HeyDPageDesignSystem_d9d450;

function LectureHero() {
  const { Button, IconTile } = DS_LH;
  // 모서리에 떠 있는 아이콘 타일 (Hero2와 같은 모티프, 모바일에서는 숨김)
  const tiles = [
    { icon: "presentation", tone: "brand", top: "16%", left: "16%", size: 72, delay: "0s" },
    { icon: "bot", tone: "sub", top: "26%", right: "17%", size: 66, delay: "0.8s" },
    { icon: "notebook-pen", tone: "point", top: "56%", left: "20%", size: 60, delay: "1.6s" },
    { icon: "graduation-cap", tone: "brand", top: "60%", right: "19%", size: 68, delay: "1.1s" },
  ];
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--surface-page)" }}>
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
        position: "relative", maxWidth: 900, margin: "0 auto", padding: "96px 32px 130px",
        textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 26,
      }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px",
          background: "var(--surface-brand-soft)", color: "var(--brand-main)",
          fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: "var(--fw-semibold)",
          letterSpacing: "var(--ls-normal)", borderRadius: "var(--r-pill)", lineHeight: 1,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--brand-main)", flex: "none" }} />
          기업·기관 맞춤 강의
        </span>
        <h1 className="heyd-hero-h1" style={{ fontSize: 52, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.25, color: "var(--text-strong)" }}>
          <span style={{ color: "var(--brand-main)" }}>강의·교육</span> 문의
        </h1>
        <p style={{ fontSize: 19, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 560 }}>
          PPT·AI·노션, 실무에 바로 쓰는 업무스킬 강의
        </p>
        <div className="heyd-hero-btns" style={{ display: "flex", gap: 12, marginTop: 6 }}>
          <Button variant="primary" size="lg" iconRight="arrow-right" as="a" href="#inquiry">강의 문의하기</Button>
        </div>
      </div>
    </section>
  );
}
window.LectureHero = LectureHero;
