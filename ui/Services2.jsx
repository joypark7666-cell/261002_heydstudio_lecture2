/* global React */
const DS_S2 = window.HeyDPageDesignSystem_d9d450;

function SectionHead2({ label, title, desc, center }) {
  const { SectionLabel } = DS_S2;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: center ? "center" : "flex-start", textAlign: center ? "center" : "left", marginBottom: 48 }}>
      {label && <span style={{ color: "var(--brand-main)", fontFamily: "var(--font-sans)", fontSize: "var(--fs-xs)", fontWeight: "var(--fw-bold)", letterSpacing: "0.02em" }}>{label}</span>}
      <h2 className="heyd-h2" style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.15, color: "var(--text-strong)" }}>{title}</h2>
      {desc && <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 620 }}>{desc}</p>}
    </div>
  );
}
window.SectionHead = SectionHead2;
window.SectionHead2 = SectionHead2;

function Services2() {
  const [open, setOpen] = React.useState(-1);
  const items = [
    { title: "회사 소개서", body: "기업의 핵심 가치와 경쟁력을 명확하게 전달합니다." },
    { title: "브랜드 소개서", body: "브랜드의 정체성과 차별점을 일관된 메시지로 보여줍니다." },
    { title: "투자 유치·IR 자료", body: "사업성과 성장 가능성을 투자자 관점에서 설득력 있게 구성합니다." },
    { title: "사업·가맹 제안서", body: "제안의 타당성과 기대 효과가 분명하게 드러나도록 설계합니다." },
    { title: "발표·강연 자료", body: "청중이 발표에 끝까지 집중할 수 있도록 내용을 구성하고 디자인합니다." },
  ];
  return (
    <section id="service" className="heyd-pad" style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "104px 32px" }}>
      <SectionHead2 center label="주요 작업 분야" title="메시지는 명확하게, 디자인은 완성도 있게" desc="문서의 목적과 메시지를 정확히 파악해, 설득력 있는 결과물로 완성합니다." />
      <div className="heyd-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <div style={{ overflow: "hidden", boxShadow: "var(--shadow-md)", alignSelf: "stretch" }}>
          <img src="uploads/Scene-5.jpg" alt="헤이디 PPT 작업 예시" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.title}
              onMouseEnter={() => setOpen(i)}
              onMouseLeave={() => setOpen(-1)}
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                borderRadius: "var(--r-lg)",
                border: isOpen ? "1px solid var(--brand-main)" : "1px solid transparent",
                background: isOpen ? "#fff" : "linear-gradient(150deg, var(--blue-400), var(--brand-main))",
                boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow-sm)",
                padding: "22px 32px",
                cursor: "default",
                transition: "all .24s var(--ease-out)",
              }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill={isOpen ? "var(--brand-main)" : "#fff"} aria-hidden="true" style={{ flex: "none", transition: "fill .24s var(--ease-out)" }}>
                  <path d="M4 4h5.2c.6 0 1.15.27 1.52.73L12 6.5h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                </svg>
                <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: isOpen ? "var(--text-strong)" : "#fff", transition: "color .24s var(--ease-out)" }}>
                  {it.title}
                </span>
              </div>
              <div style={{
                maxHeight: isOpen ? 80 : 0,
                opacity: isOpen ? 1 : 0,
                overflow: "hidden",
                transition: "max-height .24s var(--ease-out), opacity .24s var(--ease-out)",
              }}>
                <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.6, color: "var(--text-body)" }}>{it.body}</p>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
window.Services2 = Services2;
