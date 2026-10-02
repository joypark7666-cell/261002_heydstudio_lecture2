/* global React */
const DS_NV2 = window.HeyDPageDesignSystem_d9d450;

// 강의 문의 페이지 공개 여부. false 이면 메뉴에서 빠지고 lecture.html 은 메인으로 이동한다.
// 다시 열 때: 이 값을 true 로 바꾸고, lecture.html 맨 위의 noindex 메타·redirect 스크립트도 지운다.
const SHOW_LECTURE = false;

function Nav2() {
  const { Button } = DS_NV2;
  // 현재 페이지는 경로로 판별 (/lecture, /lecture.html → 강의 문의, 그 외 → 디자인 문의)
  const onLecture = /lecture/.test(window.location.pathname);
  const links = [
    { label: "디자인 문의", href: "index.html", active: !onLecture },
    ...(SHOW_LECTURE ? [{ label: "강의 문의", href: "lecture.html", active: onLecture }] : []),
  ];

  // Google 로그인 (Firebase Auth, firebase-init.js). Firebase가 꺼져 있거나 못 불러오면 버튼 자체를 숨긴다.
  const [auth, setAuth] = React.useState({ available: false, user: null });
  const [authMsg, setAuthMsg] = React.useState("");
  React.useEffect(() => (window.heydAuth ? window.heydAuth.subscribe(setAuth) : undefined), []);
  const googleSignIn = async () => {
    setAuthMsg("");
    try {
      const u = await window.heydAuth.signIn();
      if (u) window.heydTrack && window.heydTrack("login", { method: "google" });
    } catch (e) {
      setAuthMsg("로그인에 실패했어요. 팝업 차단을 확인하고 다시 시도해 주세요.");
      setTimeout(() => setAuthMsg(""), 6000);
    }
  };
  const userLabel = auth.user ? (auth.user.name || auth.user.email || "회원") : "";

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,0.82)", backdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--border-subtle)",
    }}>
      <div className="heyd-nav-inner" style={{
        maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px", height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
      }}>
        <div style={{ fontWeight: 900, fontSize: 24, letterSpacing: "-0.03em", color: "var(--text-strong)" }}>
          heyd<span style={{ color: "var(--brand-main)" }}>.</span>
        </div>
        <div className="heyd-nav-right" style={{ display: "flex", alignItems: "center", gap: 12, position: "relative" }}>
          {links.length > 1 && <nav className="heyd-nav-links" aria-label="페이지 이동" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} aria-current={l.active ? "page" : undefined} style={{
                padding: "8px 16px", borderRadius: "var(--r-pill)", fontSize: 15, lineHeight: 1,
                fontWeight: l.active ? 700 : 600, whiteSpace: "nowrap",
                color: l.active ? "var(--brand-main)" : "var(--text-muted)",
                background: l.active ? "var(--surface-brand-soft)" : "transparent",
              }}>{l.label}</a>
            ))}
          </nav>}

          {auth.available && (auth.user ? (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span aria-hidden style={{
                width: 32, height: 32, borderRadius: "50%", flex: "none",
                background: "var(--surface-brand-soft)", color: "var(--brand-main)",
                display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14,
              }}>{userLabel.trim().charAt(0).toUpperCase()}</span>
              <span className="heyd-nav-username" title={auth.user.email} style={{
                fontSize: 14, fontWeight: 600, color: "var(--text-body)", maxWidth: 140,
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
              }}>{userLabel}</span>
              <button type="button" onClick={() => window.heydAuth.signOut()} style={{
                border: "none", background: "none", cursor: "pointer", padding: "6px 4px",
                fontSize: 13.5, color: "var(--text-muted)", textDecoration: "underline", textUnderlineOffset: 3, whiteSpace: "nowrap",
              }}>로그아웃</button>
            </div>
          ) : (
            <button type="button" onClick={googleSignIn} style={{
              padding: "9px 16px", borderRadius: "var(--r-pill)", border: "1px solid var(--border-default)",
              background: "#fff", color: "var(--text-strong)", fontWeight: 600, fontSize: 14, lineHeight: 1,
              cursor: "pointer", whiteSpace: "nowrap",
            }}>Google로 로그인</button>
          ))}

          {authMsg && (
            <div role="alert" style={{
              position: "absolute", top: "calc(100% + 10px)", right: 0, width: 260, zIndex: 60,
              padding: "10px 14px", borderRadius: "var(--r-sm)", background: "#fef2f2", border: "1px solid #fecaca",
              color: "var(--danger)", fontSize: 13, lineHeight: 1.5, boxShadow: "var(--shadow-md)",
            }}>{authMsg}</div>
          )}
        </div>
      </div>
    </header>
  );
}
window.Nav2 = Nav2;
