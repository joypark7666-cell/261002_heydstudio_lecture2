/* global React */
const DS_LF = window.HeyDPageDesignSystem_d9d450;

// 폼 처리: Netlify Forms. lecture.html 의 숨김 감지 폼(name="lecture-inquiry")과 이름이 일치해야 함.
// ⚠ Netlify에 배포된 상태에서만 실제 전송이 동작합니다(로컬에선 404가 정상).
const LECTURE_FORM_NAME = "lecture-inquiry";

const TOPIC_OPTIONS = ["PPT 디자인·기획", "AI 업무 활용", "노션 업무 체계화", "기타"];
const MODE_OPTIONS = ["오프라인", "온라인", "아직 미정"];

const Req = () => <span style={{ color: "var(--danger)", marginLeft: 2 }}>*</span>;
const Hint = ({ children }) => <span style={{ color: "var(--text-faint)", fontWeight: 400, fontSize: 13 }}>{children}</span>;
const GroupLabel = ({ children }) => (
  <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 12, color: "var(--text-strong)" }}>{children}</div>
);

function LectureForm() {
  const { Field, Input, Textarea, ChoiceChip, Checkbox, Button, Card, Icon } = DS_LF;

  // ── 폼 상태 ──
  const [org, setOrg] = React.useState("");
  const [person, setPerson] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [topics, setTopics] = React.useState([]);
  const [topicEtc, setTopicEtc] = React.useState("");
  const [mode, setMode] = React.useState("");
  const [audience, setAudience] = React.useState("");
  const [schedule, setSchedule] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [request, setRequest] = React.useState("");
  const [files, setFiles] = React.useState([]);
  const [consent, setConsent] = React.useState(false);

  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState("");

  const toggleTopic = (t) =>
    setTopics((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const onPickFiles = (e) => {
    const picked = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...picked]);
    e.target.value = ""; // 같은 파일 다시 선택 가능하도록
  };
  const removeFile = (idx) => setFiles((prev) => prev.filter((_, i) => i !== idx));
  const fmtSize = (b) => (b < 1024 * 1024 ? Math.round(b / 1024) + "KB" : (b / 1024 / 1024).toFixed(1) + "MB");

  const submit = async () => {
    setError("");
    // 필수값 검증 — 폼 위→아래 순서로 첫 번째 빈 항목에서 멈춘다 (선택: 예산 범위, 첨부파일)
    if (!org.trim()) return setError("기관/회사명을 입력해 주세요.");
    if (!person.trim()) return setError("담당자명·직함을 입력해 주세요.");
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError("연락받으실 이메일을 정확히 입력해 주세요.");
    if (phone.replace(/\D/g, "").length < 9) return setError("연락처를 정확히 입력해 주세요.");
    if (topics.length === 0) return setError("강의 주제를 하나 이상 선택해 주세요.");
    if (topics.includes("기타") && !topicEtc.trim()) return setError("기타 강의 주제를 입력해 주세요.");
    if (!mode) return setError("강의 형태를 선택해 주세요.");
    if (!audience.trim()) return setError("대상 및 예상 인원을 입력해 주세요.");
    if (!schedule.trim()) return setError("희망 일정을 입력해 주세요.");
    if (!duration.trim()) return setError("강의 시간을 입력해 주세요.");
    if (mode === "오프라인" && !place.trim()) return setError("오프라인 강의는 장소를 입력해 주세요.");
    if (!request.trim()) return setError("요청사항을 입력해 주세요.");
    if (!consent) return setError("개인정보 수집·이용 동의에 체크해 주세요.");

    const topicStr = topics.map((t) => (t === "기타" ? `기타(${topicEtc.trim()})` : t)).join(", ");

    // 필드 이름(key)에 한글을 쓰면 깨지므로, 모든 내용을 한글 라벨과 함께 message 하나에 담는다.
    const lines = [
      `[ 기관/회사명 ]  ${org.trim()}`,
      `[ 담당자명·직함 ]  ${person.trim()}`,
      `[ 이메일 ]  ${email.trim()}`,
      `[ 연락처 ]  ${phone.trim()}`,
      "",
      `[ 강의 주제 ]  ${topicStr}`,
      `[ 강의 형태 ]  ${mode}`,
      `[ 대상 및 예상 인원 ]  ${audience.trim()}`,
      `[ 희망 일정 ]  ${schedule.trim()}`,
      `[ 강의 시간 ]  ${duration.trim()}`,
      `[ 장소 ]  ${place.trim() || "-"}`,
      `[ 예산 범위 ]  ${budget.trim() || "-"}`,
      "",
      `[ 요청사항 ]`,
      `${request.trim()}`,
      "",
      `[ 개인정보 수집·이용 동의 ]  ${consent ? "동의함 ✅" : "미동의"}`,
    ];
    if (files.length) lines.push("", `[ 첨부파일 ]  ${files.map((f) => f.name).join(", ")}`);
    const message = lines.join("\n");

    const fd = new FormData();
    fd.append("form-name", LECTURE_FORM_NAME);
    fd.append("bot-field", ""); // 허니팟(스팸 방지)
    fd.append("subject", `[강의 문의] ${org.trim()}`);
    fd.append("name", person.trim());
    fd.append("email", email.trim());
    fd.append("message", message);
    files.forEach((f) => fd.append("attachment", f, f.name));

    setSending(true);
    try {
      const res = await fetch("/", { method: "POST", body: fd });
      if (res.ok) {
        window.heydTrack && window.heydTrack("inquiry_submit", { type: "lecture" });
        setSent(true);
      } else {
        setError("전송에 실패했어요. 잠시 후 다시 시도해 주세요.");
      }
    } catch (err) {
      setError("네트워크 오류로 전송하지 못했어요. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSending(false);
    }
  };

  const resetForm = () => {
    setOrg(""); setPerson(""); setEmail(""); setPhone(""); setTopics([]); setTopicEtc("");
    setMode(""); setAudience(""); setSchedule(""); setDuration(""); setPlace(""); setBudget("");
    setRequest(""); setFiles([]); setConsent(false); setError(""); setSent(false);
  };

  return (
    <section id="inquiry" className="heyd-pad" style={{ maxWidth: 820, margin: "0 auto", padding: "104px 32px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center", textAlign: "center", marginBottom: 48 }}>
        <span style={{ color: "var(--brand-main)", fontFamily: "var(--font-sans)", fontSize: "var(--fs-xs)", fontWeight: "var(--fw-bold)", letterSpacing: "0.02em" }}>강의 문의</span>
        <h2 className="heyd-h2" style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.15, color: "var(--text-strong)" }}>강의를 원하시면 아래 양식을 작성해 주세요.</h2>
        <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 620 }}>
          <span style={{ color: "var(--danger)" }}>*</span> 표시는 필수 항목이에요. 내용을 확인한 뒤 이메일로 회신드릴게요.
        </p>
      </div>
      <Card variant="default" padding={40} style={{ boxShadow: "var(--shadow-md)" }}>
        {sent ? (
          <div style={{ textAlign: "center", padding: "40px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--surface-point-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="check" size={30} color="var(--point-500)" strokeWidth={2.5} />
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 800 }}>강의 문의가 접수되었습니다</h3>
            <p style={{ color: "var(--text-muted)", fontSize: 16 }}>내용을 확인한 뒤 남겨주신 이메일로 회신드릴게요.</p>
            <Button variant="outline" onClick={resetForm}>새 문의 작성</Button>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div className="heyd-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Field label={<span>기관/회사명 <Req /></span>}>
                <Input placeholder="예) OO병원, (주)OO" value={org} onChange={(e) => setOrg(e.target.value)} />
              </Field>
              <Field label={<span>담당자명·직함 <Req /></span>}>
                <Input placeholder="예) 홍길동 팀장" value={person} onChange={(e) => setPerson(e.target.value)} />
              </Field>
            </div>

            <div className="heyd-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Field label={<span>이메일 <Req /></span>}>
                <Input placeholder="hello@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Field>
              <Field label={<span>연락처 <Req /></span>}>
                <Input placeholder="010-0000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </Field>
            </div>

            <div>
              <GroupLabel>강의 주제 <Req /> <Hint>(복수 선택 가능)</Hint></GroupLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {TOPIC_OPTIONS.map((t) => (
                  <ChoiceChip key={t} selected={topics.includes(t)} onClick={() => toggleTopic(t)}>{t}</ChoiceChip>
                ))}
              </div>
              {topics.includes("기타") && (
                <div style={{ marginTop: 12 }}>
                  <Input placeholder="원하시는 강의 주제를 적어주세요" value={topicEtc} onChange={(e) => setTopicEtc(e.target.value)} />
                </div>
              )}
            </div>

            <div>
              <GroupLabel>강의 형태 <Req /></GroupLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {MODE_OPTIONS.map((m) => (
                  <ChoiceChip key={m} selected={mode === m} onClick={() => setMode(m)}>{m}</ChoiceChip>
                ))}
              </div>
            </div>

            <div className="heyd-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Field label={<span>대상 및 예상 인원 <Req /></span>}>
                <Input placeholder="예) 신입 사원 30명" value={audience} onChange={(e) => setAudience(e.target.value)} />
              </Field>
              <Field label={<span>희망 일정 <Req /></span>}>
                <Input placeholder="예) 11월 중순 평일 오후" value={schedule} onChange={(e) => setSchedule(e.target.value)} />
              </Field>
            </div>

            <div className="heyd-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Field label={<span>강의 시간 <Req /></span>}>
                <Input placeholder="예) 2시간" value={duration} onChange={(e) => setDuration(e.target.value)} />
              </Field>
              <Field label={<span>장소 <Hint>(오프라인일 때 필수)</Hint></span>}>
                <Input placeholder="예) 서울 강남구 OO 교육장" value={place} onChange={(e) => setPlace(e.target.value)} />
              </Field>
            </div>

            <Field label={<span>예산 범위 <Hint>(선택)</Hint></span>}>
              <Input placeholder="예) 협의 가능, 회당 OO만 원 내외" value={budget} onChange={(e) => setBudget(e.target.value)} />
            </Field>

            <Field label={<span>요청사항 <Req /> <Hint>(원하는 내용·목표를 자유롭게 적어주세요.)</Hint></span>}>
              <Textarea rows={5} placeholder="예) 보고서 작성이 잦은 팀이라 PPT 도식화와 AI 활용을 함께 다루고 싶어요." value={request} onChange={(e) => setRequest(e.target.value)} />
            </Field>

            <Field label={<span>참고자료 첨부 <Hint>(선택 · 여러 개 가능)</Hint></span>}>
              <label style={{ display: "flex", alignItems: "center", gap: 14, padding: "22px", border: "1.5px dashed var(--border-default)", borderRadius: "var(--r-md)", color: "var(--text-muted)", background: "var(--surface-subtle)", cursor: "pointer" }}>
                <Icon name="paperclip" size={20} color="var(--brand-main)" />
                <span style={{ fontSize: 15 }}>클릭해서 파일을 첨부하세요</span>
                <input type="file" multiple onChange={onPickFiles} style={{ display: "none" }} />
              </label>
              {files.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
                  {files.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "10px 14px", background: "var(--surface-subtle)", borderRadius: "var(--r-sm)", fontSize: 14 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 8, overflow: "hidden" }}>
                        <Icon name="file" size={16} color="var(--brand-main)" />
                        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "var(--text-body)" }}>{f.name}</span>
                        <span style={{ color: "var(--text-faint)", flex: "none" }}>{fmtSize(f.size)}</span>
                      </span>
                      <button type="button" onClick={() => removeFile(i)} aria-label={`${f.name} 삭제`} style={{ border: "none", background: "none", color: "var(--text-faint)", cursor: "pointer", display: "flex", flex: "none" }}>
                        <Icon name="x" size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <p style={{ fontSize: 12.5, color: "var(--text-faint)", marginTop: 8 }}>* 첨부 용량이 크면 전송이 제한될 수 있어요. 이 경우 클라우드 링크를 '요청사항'란에 남겨주세요.</p>
            </Field>

            <div>
              <Checkbox label={<span>개인정보 수집·이용에 동의합니다. <Req /></span>} checked={consent} onChange={() => setConsent(!consent)} />
              <p style={{ fontSize: 12.5, color: "var(--text-faint)", marginTop: 8, marginLeft: 2 }}>입력하신 정보는 강의 문의 상담 목적으로만 사용돼요.</p>
            </div>

            {error && (
              <div role="alert" style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "var(--r-sm)", color: "var(--danger)", fontSize: 14 }}>
                <Icon name="alert-circle" size={16} color="var(--danger)" />
                <span>{error}</span>
              </div>
            )}

            <Button variant="primary" size="lg" full iconRight={sending ? undefined : "arrow-right"} onClick={submit} disabled={sending}>
              {sending ? "전송 중…" : "강의 문의 보내기"}
            </Button>
          </div>
        )}
      </Card>
    </section>
  );
}
window.LectureForm = LectureForm;
