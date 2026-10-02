/* global React */
const DS_LT = window.HeyDPageDesignSystem_d9d450;

// 강의 주제 카드 데이터 — 문구는 초안이니 여기서 수정하세요.
const LECTURE_TOPICS = [
  {
    icon: "presentation", tone: "brand", name: "PPT",
    title: "설득력 있는 PPT 기획·디자인",
    desc: "내용 구성부터 도식화, 디자인까지. 읽는 사람이 한눈에 이해하는 문서를 만드는 방법을 알려드려요.",
    audience: "제안·보고 자료를 자주 만드는 실무자",
  },
  {
    icon: "bot", tone: "sub", name: "AI",
    title: "AI로 일하는 방식 바꾸기",
    desc: "클로드 등 AI 도구를 실무에 바로 적용해 자료 제작과 업무 시간을 줄이는 방법을 다뤄요.",
    audience: "AI를 써보고 싶지만 어디서 시작할지 막막한 팀",
  },
  {
    icon: "notebook-pen", tone: "point", name: "노션",
    title: "업무를 체계화하는 노션",
    desc: "일정관리, 자료 정리, 협업 템플릿으로 흩어진 업무를 한곳에 모으는 방법을 알려드려요.",
    audience: "일정과 업무가 여러 곳에 흩어진 팀·개인",
  },
];

function LectureTopics() {
  const { Card, IconTile } = DS_LT;
  return (
    <section id="topics" className="heyd-pad" style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "104px 32px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center", textAlign: "center", marginBottom: 48 }}>
        <span style={{ color: "var(--brand-main)", fontFamily: "var(--font-sans)", fontSize: "var(--fs-xs)", fontWeight: "var(--fw-bold)", letterSpacing: "0.02em" }}>강의 주제</span>
        <h2 className="heyd-h2" style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.15, color: "var(--text-strong)" }}>실무에 바로 쓰는 세 가지 업무스킬</h2>
        <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 620 }}>조직의 상황에 맞춰 주제를 고르거나 함께 구성할 수 있어요.</p>
      </div>
      <div className="heyd-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
        {LECTURE_TOPICS.map((t) => (
          <Card key={t.name} variant="default" padding={32} hover style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <IconTile icon={t.icon} tone={t.tone} size={56} />
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.02em", color: "var(--brand-main)" }}>{t.name}</div>
            <h3 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.3, color: "var(--text-strong)" }}>{t.title}</h3>
            <p style={{ fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.65, wordBreak: "keep-all" }}>{t.desc}</p>
            <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--border-subtle)", fontSize: 13.5, color: "var(--text-body)", lineHeight: 1.55, wordBreak: "keep-all" }}>
              <span style={{ color: "var(--text-faint)", fontWeight: 600 }}>추천 대상 </span>{t.audience}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
window.LectureTopics = LectureTopics;
