/* global React */
const DS_CT = window.HeyDPageDesignSystem_d9d450;

function Contact() {
  const { Button, Icon } = DS_CT;
  const channels = [
    { icon: "mail", label: "디자인·협업 문의", value: "hyein7666@naver.com" },
    { icon: "youtube", label: "유튜브", value: "헤이디_PPT 디자인" },
    { icon: "link", label: "링크 모음", value: "litt.ly/heyd" },
  ];
  return (
    <section id="contact" className="heyd-pad" style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "104px 32px" }}>
      <div className="heyd-contact-box" style={{ background: "var(--gray-900)", borderRadius: "var(--r-2xl)", padding: "72px 56px", textAlign: "center", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "-40%", right: "-10%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(1,57,238,0.55), rgba(1,57,238,0) 70%)" }} />
        <div style={{ position: "relative" }}>
          <h2 className="heyd-h2" style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 18 }}>
            중요한 문서, 이제 <span style={{ color: "var(--brand-point)" }}>전문가</span>와 함께
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.72)", marginBottom: 36 }}>
            프로젝트 상담은 언제든 편하게. 견적과 일정은 무료로 안내드립니다.
          </p>
          <div className="heyd-contact-btns" style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 48 }}>
            <Button variant="primary" size="lg" iconRight="arrow-right" as="a" href="#order">주문서 작성하기</Button>
            <Button variant="dark" size="lg" iconLeft="message-circle" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>1:1 문의</Button>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 44, flexWrap: "wrap" }}>
            {channels.map((c) => (
              <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={c.icon} size={20} color="var(--brand-point)" />
                </span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>{c.label}</div>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;

function Footer() {
  return (
    <footer style={{ background: "var(--surface-page)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "40px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontWeight: 900, fontSize: 22, letterSpacing: "-0.03em", color: "var(--text-strong)" }}>heyd<span style={{ color: "var(--brand-main)" }}>.</span></div>
        <div style={{ fontSize: 13, color: "var(--text-faint)" }}>© 2026 HeyD. All rights reserved.</div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
