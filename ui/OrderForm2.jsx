/* global React */
const DS_OF2 = window.HeyDPageDesignSystem_d9d450;

// ────────────────────────────────────────────────────────────────
// 폼 처리: Netlify Forms (무료·파일 첨부 지원).
// index.html 의 숨김 감지 폼(name="ppt-order")과 이름이 일치해야 함.
// ⚠ Netlify에 배포된 상태에서만 실제 전송이 동작합니다(로컬에선 미작동).
const NETLIFY_FORM_NAME = "ppt-order";
// ────────────────────────────────────────────────────────────────

function OrderForm2() {
  const { Field, Input, Textarea, ChoiceChip, Checkbox, Button, Card, Icon } = DS_OF2;
  const usages = ["발표용 (청중 앞)", "PDF 전달용", "인쇄물 제작", "온라인 게시", "기타"];
  const scopes = ["내용 구성", "디자인", "기존 자료 검토 및 컨설팅"];

  // ── 폼 상태 ──
  const [purpose, setPurpose] = React.useState("");
  const [usage, setUsage] = React.useState(["발표용 (청중 앞)"]);
  const [usageEtc, setUsageEtc] = React.useState("");
  const [scope, setScope] = React.useState(["디자인"]);
  const [dueDate, setDueDate] = React.useState("");
  const [volume, setVolume] = React.useState("");
  const [direction, setDirection] = React.useState("");
  const [files, setFiles] = React.useState([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [noticeRead, setNoticeRead] = React.useState(false);

  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState("");

  // Google 로그인(선택): 로그인하면 이름·이메일을 비어 있는 칸에 채워준다 (Firebase Auth, 저장 안 함)
  const [auth, setAuth] = React.useState({ available: false, user: null });
  React.useEffect(() => (window.heydAuth ? window.heydAuth.subscribe(setAuth) : undefined), []);
  React.useEffect(() => {
    if (!auth.user) return;
    setName((v) => v || auth.user.name);
    setEmail((v) => v || auth.user.email);
  }, [auth.user]);
  const googleSignIn = async () => {
    try { await window.heydAuth.signIn(); } catch (e) { setError("Google 로그인에 실패했어요. 팝업 차단 여부를 확인해 주세요."); }
  };
  const googleBox = auth.available ? (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap", padding: "12px 16px", background: "var(--surface-subtle)", borderRadius: "var(--r-md)", fontSize: 14, color: "var(--text-body)" }}>
      {auth.user ? (
        <React.Fragment>
          <span><b style={{ fontWeight: 700 }}>{auth.user.email}</b> 계정 정보를 불러왔어요.</span>
          <button type="button" onClick={() => window.heydAuth.signOut()} style={{ border: "none", background: "none", color: "var(--text-muted)", textDecoration: "underline", cursor: "pointer", fontSize: 13.5 }}>로그아웃</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <span>Google 계정으로 이름·이메일을 바로 채울 수 있어요. <span style={{ color: "var(--text-faint)", fontSize: 13 }}>(선택)</span></span>
          <button type="button" onClick={googleSignIn} style={{ padding: "8px 14px", borderRadius: "var(--r-pill)", border: "1px solid var(--border-default)", background: "#fff", color: "var(--text-strong)", fontWeight: 600, fontSize: 13.5, cursor: "pointer" }}>Google로 불러오기</button>
        </React.Fragment>
      )}
    </div>
  ) : null;

  const toggleUsage = (u) =>
    setUsage((prev) => (prev.includes(u) ? prev.filter((x) => x !== u) : [...prev, u]));
  const toggleScope = (s) =>
    setScope((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const onPickFiles = (e) => {
    const picked = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...picked]);
    e.target.value = ""; // 같은 파일 다시 선택 가능하도록
  };
  const removeFile = (idx) => setFiles((prev) => prev.filter((_, i) => i !== idx));
  const fmtSize = (b) => (b < 1024 * 1024 ? Math.round(b / 1024) + "KB" : (b / 1024 / 1024).toFixed(1) + "MB");

  const submit = async () => {
    setError("");
    // 필수값 검증 — 모든 항목 + 파일 첨부까지 하나라도 비면 전송 차단 (폼 위→아래 순서)
    if (!purpose.trim()) return setError("PPT의 목적을 입력해 주세요.");
    if (usage.length === 0) return setError("활용 방식을 하나 이상 선택해 주세요.");
    if (usage.includes("기타") && !usageEtc.trim()) return setError("기타 활용 방식을 입력해 주세요.");
    if (scope.length === 0) return setError("작업 범위를 하나 이상 선택해 주세요.");
    if (!dueDate) return setError("최종본 수령 희망일을 선택해 주세요.");
    if (!volume.trim()) return setError("예상 분량을 입력해 주세요.");
    if (!direction.trim()) return setError("디자인 방향성을 입력해 주세요.");
    if (files.length === 0) return setError("정리된 자료를 1개 이상 첨부해 주세요.");
    if (!name.trim()) return setError("이름 / 회사를 입력해 주세요.");
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("연락받으실 이메일을 정확히 입력해 주세요.");
    if (!noticeRead) return setError("고지사항 확인에 체크해 주세요.");

    const usageStr = usage.map((u) => (u === "기타" && usageEtc.trim() ? `기타(${usageEtc.trim()})` : u)).join(", ");

    // Web3Forms는 필드 '이름(key)'의 한글을 깨뜨리므로(값은 정상),
    // 모든 내용을 하나의 message 값에 한글로 정리해 담는다.
    const lines = [
      `[ 이름 / 회사 ]  ${name.trim()}`,
      `[ 연락 이메일 ]  ${email.trim()}`,
      "",
      `[ PPT 목적 ]`,
      `${purpose.trim()}`,
      "",
      `[ 활용 방식 ]  ${usageStr || "-"}`,
      `[ 작업 범위 ]  ${scope.join(", ") || "-"}`,
      `[ 희망 완료일 ]  ${dueDate || "-"}`,
      `[ 예상 분량 ]  ${volume.trim() || "-"}`,
      "",
      `[ 디자인 방향성 ]`,
      `${direction.trim() || "-"}`,
      "",
      `[ 고지사항 확인 ]  ${noticeRead ? "동의함 ✅" : "미동의"}`,
    ];
    if (files.length) lines.push("", `[ 첨부파일 ]  ${files.map((f) => f.name).join(", ")}`);
    const message = lines.join("\n");

    const fd = new FormData();
    fd.append("form-name", NETLIFY_FORM_NAME);
    fd.append("bot-field", ""); // 허니팟(스팸 방지)
    fd.append("subject", `[PPT 의뢰서] ${name.trim()}`);
    fd.append("name", name.trim());
    fd.append("email", email.trim());
    fd.append("message", message);
    files.forEach((f) => fd.append("attachment", f, f.name));

    setSending(true);
    try {
      const res = await fetch("/", { method: "POST", body: fd });
      if (res.ok) {
        window.heydTrack && window.heydTrack("inquiry_submit", { type: "design" });
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
    setPurpose(""); setUsage(["발표용 (청중 앞)"]); setUsageEtc(""); setScope(["디자인"]);
    setDueDate(""); setVolume(""); setDirection(""); setFiles([]); setName(""); setEmail("");
    setNoticeRead(false); setError(""); setSent(false);
  };

  return (
    <section id="order" className="heyd-pad" style={{ maxWidth: 820, margin: "0 auto", padding: "104px 32px" }}>
      <window.SectionHead center label="의뢰서 작성" title="의뢰를 원하시면 아래 양식을 작성해 주세요." desc="모든 항목을 빠짐없이 작성하고 자료를 첨부해 주세요. (전 항목 필수)" />
      <Card variant="default" padding={40} style={{ boxShadow: "var(--shadow-md)" }}>
        {sent ? (
          <div style={{ textAlign: "center", padding: "40px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--surface-point-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="check" size={30} color="var(--point-500)" strokeWidth={2.5} />
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 800 }}>의뢰서가 접수되었습니다</h3>
            <p style={{ color: "var(--text-muted)", fontSize: 16 }}>영업일 기준 24시간 내에 회신드립니다.</p>
            <Button variant="outline" onClick={resetForm}>새 의뢰서 작성</Button>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <Field label={<span>PPT의 목적 <span style={{ color: "var(--text-faint)", fontWeight: 400, fontSize: 13 }}>(무엇을 위한 PPT인지 구체적으로 적어주세요.)</span></span>}>
              <Input placeholder="예) OO사업에 대한 투자 유치를 위한 발표 자료, 점주 모집을 위한 가맹 제안서" value={purpose} onChange={(e) => setPurpose(e.target.value)} />
            </Field>

            <div>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 12, color: "var(--text-strong)" }}>활용 방식 <span style={{ color: "var(--text-faint)", fontWeight: 400, fontSize: 13 }}>(복수 선택 가능)</span></div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {usages.map((u) => (
                  <ChoiceChip key={u} selected={usage.includes(u)} onClick={() => toggleUsage(u)}>{u}</ChoiceChip>
                ))}
              </div>
              {usage.includes("기타") && (
                <div style={{ marginTop: 12 }}>
                  <Input placeholder="어떻게 활용하실 예정인지 적어주세요" value={usageEtc} onChange={(e) => setUsageEtc(e.target.value)} />
                </div>
              )}
            </div>

            <div>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 12, color: "var(--text-strong)" }}>작업 범위 <span style={{ color: "var(--text-faint)", fontWeight: 400, fontSize: 13 }}>(필요한 작업을 선택해 주세요.)</span></div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {scopes.map((s) => (
                  <Checkbox key={s} label={s} checked={scope.includes(s)} onChange={() => toggleScope(s)} />
                ))}
              </div>
            </div>

            <div className="heyd-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Field label="최종본 수령 희망일">
                <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
              </Field>
              <Field label="예상 분량">
                <Input placeholder="예) 20장 내외" value={volume} onChange={(e) => setVolume(e.target.value)} />
              </Field>
            </div>

            <Field label={<span>디자인 방향성 <span style={{ color: "var(--text-faint)", fontWeight: 400, fontSize: 13 }}>(원하는 느낌을 설명하거나 참고 링크를 남겨주세요.)</span></span>}>
              <Textarea rows={4} placeholder="예) 신뢰감 있고 깔끔한 무드, 블루 계열 선호. 참고: behance.net/..." value={direction} onChange={(e) => setDirection(e.target.value)} />
            </Field>

            <Field label={<span>정리된 자료 첨부 <span style={{ color: "var(--text-faint)", fontWeight: 400, fontSize: 13 }}>(PPT, PDF, DOC, 이미지 · 여러 개 가능)</span></span>}>
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
                      <button type="button" onClick={() => removeFile(i)} style={{ border: "none", background: "none", color: "var(--text-faint)", cursor: "pointer", display: "flex", flex: "none" }}>
                        <Icon name="x" size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <p style={{ fontSize: 12.5, color: "var(--text-faint)", marginTop: 8 }}>* 첨부 용량이 크면(대용량 PPT 등) 전송이 제한될 수 있어요. 이 경우 클라우드 링크를 '디자인 방향성'란에 남겨주세요.</p>
            </Field>

            {googleBox}
            <div className="heyd-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Field label="이름 / 회사">
                <Input placeholder="홍길동 / (주)헤이디" value={name} onChange={(e) => setName(e.target.value)} />
              </Field>
              <Field label="이메일">
                <Input placeholder="hello@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Field>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <Checkbox label="고지사항을 읽어보셨나요?" checked={noticeRead} onChange={() => setNoticeRead(!noticeRead)} />
              <a href="#notice" style={{ fontSize: 13.5, fontWeight: 600, color: "var(--brand-main)", textDecoration: "underline", textUnderlineOffset: 3 }}>고지사항 보러 가기</a>
            </div>

            {error && (
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "var(--r-sm)", color: "var(--danger)", fontSize: 14 }}>
                <Icon name="alert-circle" size={16} color="var(--danger)" />
                <span>{error}</span>
              </div>
            )}

            <Button variant="primary" size="lg" full iconRight={sending ? undefined : "arrow-right"} onClick={submit} disabled={sending}>
              {sending ? "전송 중…" : "의뢰서 보내기"}
            </Button>
          </div>
        )}
      </Card>
    </section>
  );
}
window.OrderForm2 = OrderForm2;
