/* global React */

function HowItWorks() {
  const steps = [
    { n: "1", title: "주문서 작성", body: "주문 양식을 작성해 제출해 주세요." },
    { n: "2", title: "상담 및 일정 조율", body: <React.Fragment>영업일 기준 24시간 이내에 회신드리며, 일정과 견적,<br />디자인 방향을 함께 조율합니다.</React.Fragment> },
    { n: "3", title: "1차 시안 전달", body: "협의한 콘셉트를 반영한 2~3장의 디자인 시안을 전달드립니다." },
    { n: "4", title: "1차 완성본 전달", body: <React.Fragment>피드백을 반영해 전체 슬라이드를 완성한 뒤,<br />1차 완성본을 전달드립니다.</React.Fragment> },
    { n: "5", title: "최종본 전달", body: "추가 피드백과 수정 사항을 반영한 최종본을 전달드립니다." },
  ];
  return (
    <section id="how" style={{ background: "var(--surface-subtle)" }}>
      <div className="heyd-pad" style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "104px 32px" }}>
        <window.SectionHead center label="기본 작업 과정" title="의뢰부터 완성까지, 체계적인 5단계로 진행합니다." desc="일정 조율부터 최종본 전달까지 직접 안내하고 진행합니다." />
        <div className="heyd-steps" style={{ display: "flex", alignItems: "stretch" }}>
          {steps.map((s, i) => (
            <React.Fragment key={s.n}>
              {i > 0 && (
                <div className="heyd-step-connector" style={{ flex: "none", width: 22, display: "flex", alignItems: "center" }}>
                  <span style={{ flex: 1, height: 0, borderTop: "1px dotted var(--blue-300)" }} />
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--brand-main)", flex: "none", marginRight: -3.5, position: "relative", zIndex: 1 }} />
                </div>
              )}
              <div style={{
                flex: 1,
                background: "var(--surface-card)", border: "none",
                borderRadius: "var(--r-lg)", padding: "24px 22px", boxShadow: "var(--shadow-sm)",
                display: "flex", flexDirection: "column", gap: 12,
              }}>
                <div style={{ fontSize: 21, fontWeight: 900, color: "var(--brand-main)", lineHeight: 1 }}>{s.n}</div>
                <div>
                  <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: "var(--text-strong)", letterSpacing: "-0.02em" }}>{s.title}</h4>
                  <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65, textWrap: "pretty", wordBreak: "keep-all" }}>{s.body}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
window.HowItWorks = HowItWorks;
