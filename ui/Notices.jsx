/* global React */
const DS_NT = window.HeyDPageDesignSystem_d9d450;

function Notices() {
  const { Icon } = DS_NT;
  const groups = [
    {
      title: "작업 관련 안내사항",
      icon: "pen-tool",
      items: [
        <React.Fragment key="w1">완성된 PPT의 저작권은 디자이너와 클라이언트가 공동으로 소유합니다.<br />제작물의 일부 슬라이드는 포트폴리오 및 콘텐츠에 활용될 수 있으며,<br />공개를 원하지 않으실 경우 작업 전 미리 말씀해 주세요.</React.Fragment>,
        <React.Fragment key="w2">무료 수정은 최대 2회까지 가능합니다.<br />이후 추가 수정에는 별도의 비용이 발생할 수 있습니다.</React.Fragment>,
      ],
    },
    {
      title: "결제 관련 안내사항",
      icon: "credit-card",
      items: [
        "결제는 작업 시작 전 50%, 완성본 전달 후 50%로 나누어 진행됩니다.",
        "작업이 시작된 이후에는 전액 환불이 어렵습니다. 제작 도중 작업 중단을 요청하실 경우, 진행된 작업분을 제외한 잔여 금액을 환불해 드립니다.",
        "세금계산서 발행이 가능합니다.",
      ],
    },
  ];
  return (
    <section id="notice" style={{ background: "var(--surface-subtle)" }}>
      <div className="heyd-pad" style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "104px 32px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center", textAlign: "center", marginBottom: 48 }}>
          <span style={{ color: "var(--brand-main)", fontFamily: "var(--font-sans)", fontSize: "var(--fs-xs)", fontWeight: "var(--fw-bold)", letterSpacing: "0.02em" }}>고지사항</span>
          <h2 className="heyd-h2" style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.15, color: "var(--text-strong)" }}>의뢰 전, 꼭 확인해 주세요.</h2>
        </div>
        <div className="heyd-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "stretch" }}>
          {groups.map((g) => (
            <div key={g.title} style={{ background: "var(--surface-card)", borderRadius: "var(--r-lg)", padding: "30px 34px 12px", boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column" }}>
              <span style={{ alignSelf: "flex-start", padding: "9px 18px", borderRadius: "var(--r-pill)", background: "var(--surface-brand-soft)", color: "var(--brand-main)", fontSize: 15, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 10 }}>{g.title}</span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {g.items.map((it, i) => (
                  <div key={i} style={{ padding: "16px 2px", borderTop: i > 0 ? "1px solid var(--border-subtle)" : "none" }}>
                    <p style={{ fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.7, wordBreak: "keep-all", textWrap: "pretty" }}>{it}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Notices = Notices;
