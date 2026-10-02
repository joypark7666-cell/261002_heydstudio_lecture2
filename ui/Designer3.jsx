/* global React */
const DS_DG3 = window.HeyDPageDesignSystem_d9d450;

function Designer3() {
  const { Icon } = DS_DG3;
  const stats = [
    { value: "8", suffix: "년", label: "실무 PPT 경력" },
    { value: "1:1", suffix: "", label: "전담 직접 제작" },
    { value: "100", suffix: "%", label: "사람이 만드는 디자인" },
  ];
  const points = [
    <span key="p1">8년간 <b style={{ fontWeight: 800 }}>250여 곳</b>의 클라이언트와 다양한 PPT 프로젝트 진행</span>,
    <span key="p2">기획부터 디자인까지 <b style={{ fontWeight: 800 }}>직접 전담</b>해 일관된 완성도 유지</span>,
    <span key="p3">5.8만 구독자에게 검증받은 <b style={{ fontWeight: 800 }}>기획·표현 노하우</b> 적용</span>,
  ];
  return (
    <section id="designer" style={{ background: "#fff", overflow: "hidden" }}>
      <div className="heyd-designer-grid" style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "104px 32px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div className="heyd-designer-text" style={{ paddingBottom: 104 }}>
          <div style={{ color: "var(--brand-main)", fontFamily: "var(--font-sans)", fontSize: "var(--fs-xs)", fontWeight: "var(--fw-bold)", letterSpacing: "0.02em", marginBottom: 14 }}>디자이너 소개</div>
          <h2 className="heyd-h2" style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.35, marginBottom: 20, color: "var(--text-strong)" }}>
            내용 구성부터 디자인까지,<br />전문가가 전담합니다.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
            {points.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--surface-brand-soft)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <Icon name="check" size={15} color="var(--brand-main)" strokeWidth={2.5} />
                </span>
                <span style={{ fontSize: 16, color: "var(--text-body)" }}>{p}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "auto 1px auto 1px auto", justifyContent: "space-between", alignItems: "center", maxWidth: 460 }}>
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <span style={{ width: 1, height: 44, background: "var(--border-default)" }} />}
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
                    <span style={{ fontSize: 34, fontWeight: 900, letterSpacing: "-0.03em", color: "var(--brand-main)", lineHeight: 1 }}>{s.value}</span>
                    <span style={{ fontSize: 34, fontWeight: 900, letterSpacing: "-0.03em", color: "var(--brand-main)", lineHeight: 1 }}>{s.suffix}</span>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-faint)", marginTop: 4 }}>{s.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* photo side — cut-out portrait on a soft blue backdrop */}
        <div className="heyd-designer-photo" style={{ position: "relative", alignSelf: "end", height: 560 }}>
          <div aria-hidden className="heyd-designer-glow" style={{
            position: "absolute", left: "50%", bottom: -140, transform: "translateX(-50%)",
            width: 620, height: 620, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(1,57,238,0.18) 0%, rgba(1,57,238,0.09) 55%, rgba(1,57,238,0) 72%)",
          }} />
          <img className="heyd-designer-img" src="uploads/MAKE3517-2.png" alt="헤이디 — PPT 디자이너"
            style={{ position: "absolute", left: "50%", bottom: 0, transform: "translateX(-50%)", height: 520, zIndex: 1, pointerEvents: "none" }} />
          <div className="heyd-designer-card" style={{
            position: "absolute", right: 40, top: 140, zIndex: 2,
            background: "rgba(255,255,255,0.85)", border: "1px solid var(--border-subtle)",
            backdropFilter: "blur(8px)", borderRadius: "var(--r-lg)", padding: "16px 24px",
            boxShadow: "var(--shadow-md)",
          }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: "var(--text-strong)", marginBottom: 8 }}>헤이디 (HeyD)</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <div style={{ fontSize: 14, color: "var(--text-muted)" }}>
                8년 차 PPT 디자이너
              </div>
              <div style={{ fontSize: 14, color: "var(--text-muted)" }}>
                5.8만 기획·PPT 분야 크리에이터
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Designer3 = Designer3;
