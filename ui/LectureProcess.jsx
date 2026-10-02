/* global React */

// 진행 방식 4단계 — 문구는 초안이니 여기서 수정하세요.
const LECTURE_STEPS = [
  { n: "1", title: "문의 접수", body: "아래 문의 양식을 작성해 제출해 주세요." },
  { n: "2", title: "상담", body: "강의 주제와 대상, 일정을 함께 조율합니다." },
  { n: "3", title: "커리큘럼·견적 제안", body: "상담 내용에 맞춘 커리큘럼과 견적을 안내드립니다." },
  { n: "4", title: "강의 진행 및 사후 자료", body: "강의를 진행하고, 필요한 경우 사후 자료를 전달드립니다." },
];

// 강의를 진행한 기관(일부) — 채널 정보란 기준 초안. ⚠ 게시 전 헤이디 확인 필요, 여기서 수정/추가하세요.
const LECTURE_HISTORY = ["서울대병원", "화성시청", "광운대학교", "한국능률협회"];

function LectureProcess() {
  return (
    <section id="process" style={{ background: "var(--surface-subtle)" }}>
      <div className="heyd-pad" style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "104px 32px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center", textAlign: "center", marginBottom: 48 }}>
          <span style={{ color: "var(--brand-main)", fontFamily: "var(--font-sans)", fontSize: "var(--fs-xs)", fontWeight: "var(--fw-bold)", letterSpacing: "0.02em" }}>진행 방식</span>
          <h2 className="heyd-h2" style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.15, color: "var(--text-strong)" }}>문의부터 강의까지, 네 단계로 진행합니다.</h2>
          <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 620 }}>일정과 커리큘럼은 상담을 통해 함께 정해요.</p>
        </div>
        <div className="heyd-steps" style={{ display: "flex", alignItems: "stretch" }}>
          {LECTURE_STEPS.map((s, i) => (
            <React.Fragment key={s.n}>
              {i > 0 && (
                <div className="heyd-step-connector" style={{ flex: "none", width: 22, display: "flex", alignItems: "center" }}>
                  <span style={{ flex: 1, height: 0, borderTop: "1px dotted var(--blue-300)" }} />
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--brand-main)", flex: "none", marginRight: -3.5, position: "relative", zIndex: 1 }} />
                </div>
              )}
              <div style={{
                flex: 1, background: "var(--surface-card)", border: "none",
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

        {/* 진행 이력 — 로고 대신 텍스트 칩 */}
        <div style={{ marginTop: 56, textAlign: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-faint)", marginBottom: 16 }}>이런 곳에서 강의했어요</div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
            {LECTURE_HISTORY.map((name) => (
              <span key={name} style={{
                padding: "10px 18px", borderRadius: "var(--r-pill)", background: "var(--surface-card)",
                border: "1px solid var(--border-subtle)", fontSize: 15, fontWeight: 600, color: "var(--text-body)",
              }}>{name}</span>
            ))}
            <span style={{ padding: "10px 6px", fontSize: 15, color: "var(--text-faint)" }}>등</span>
          </div>
        </div>
      </div>
    </section>
  );
}
window.LectureProcess = LectureProcess;
