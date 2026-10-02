/* global React */

// 3줄 로고 그리드 + 각 줄 무한 스크롤(줄마다 방향 교차). 순수 CSS keyframes, 의존성 0.
function Clients() {
  // 기업 → 공공기관 → 교육기관 순. 회색 단색 통일. h/mw/up: 개별 조정.
  const rows = [
    [ // ── 기업 ──
      { name: "삼성SDI", file: "samsung-sdi.svg", h: 27, mw: "94%" },
      { name: "현대차증권", file: "hyundai-motor-securities.svg", h: 27, up: 2 },
      { name: "토요타", file: "toyota.svg" },
      { name: "에뛰드", file: "etude.svg" },
      { name: "NOL", file: "nol.svg" },
      { name: "한글과컴퓨터", file: "hancom.svg" },
    ],
    [ // ── 기업 + 공공기관 ──
      { name: "폴라리스오피스", file: "polaris-office.svg", h: 27, mw: "94%" },
      { name: "한국능률협회컨설팅", file: "kmac.svg" },
      { name: "산업통상부", file: "motie.svg", h: 27 },
      { name: "한국전자통신연구원", file: "etri.svg" },
      { name: "국토연구원", file: "krihs.svg", h: 27, mw: "94%" },
      { name: "국립한국문학관", file: "nmkl.png" },
    ],
    [ // ── 공공기관 + 교육기관 ──
      { name: "제천시", file: "jecheon.svg", h: 27 },
      { name: "구례군", file: "gurye.svg" },
      { name: "진안군", file: "jinan.svg", h: 27 },
      { name: "경북대학교", file: "knu.svg", h: 34 },
      { name: "서경대학교", file: "skuniv.svg" },
      { name: "김영편입", file: "kimyoung.png" },
    ],
  ];
  const durations = [46, 52, 44]; // 줄마다 살짝 다른 속도로 조금 더 자연스럽게
  const css = `
    @keyframes heyd-row-l { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    @keyframes heyd-row-r { from { transform: translateX(-50%); } to { transform: translateX(0); } }
    .heyd-rows:hover .heyd-row-track { animation-play-state: paused; }
    @media (prefers-reduced-motion: reduce) { .heyd-row-track { animation: none !important; } }
  `;

  const Cell = ({ logo }) => (
    <div title={logo.name} style={{
      flex: "none", width: 180, height: 84,
      display: "flex", alignItems: "center", justifyContent: "center", padding: "0 18px",
      background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--r-md)",
    }}>
      <img src={`uploads/logos/${logo.file}`} alt={logo.name} style={{
        height: logo.h || 24, width: "auto", maxWidth: logo.mw || "86%", objectFit: "contain",
        filter: "grayscale(1)", opacity: 0.68,
        transform: logo.up ? `translateY(-${logo.up}px)` : undefined,
      }} />
    </div>
  );

  return (
    <section id="clients" className="heyd-pad" style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "104px 32px" }}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center", textAlign: "center", marginBottom: 48 }}>
        <span style={{ color: "var(--brand-main)", fontFamily: "var(--font-sans)", fontSize: "var(--fs-xs)", fontWeight: "var(--fw-bold)", letterSpacing: "0.02em" }}>클라이언트</span>
        <h2 className="heyd-h2" style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.3, color: "var(--text-strong)" }}>유수의 기업이 선택한 PPT 파트너</h2>
        <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 620 }}>스타트업부터 대기업, 공공기관까지 다양한 조직의 PPT 프로젝트를 진행해왔습니다.</p>
      </div>
      <div className="heyd-rows" style={{
        display: "flex", flexDirection: "column", gap: 16, overflow: "hidden",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}>
        {rows.map((row, ri) => {
          // 매끄러운 루프: 6개를 4벌 복제 후 -50% 이동(=2벌 폭). 줄마다 방향 교차.
          const track = [...row, ...row, ...row, ...row];
          const dir = ri % 2 === 0 ? "heyd-row-l" : "heyd-row-r";
          return (
            <div key={ri} style={{ overflow: "hidden" }}>
              <div className="heyd-row-track" style={{
                display: "flex", gap: 16, width: "max-content",
                animation: `${dir} ${durations[ri]}s linear infinite`,
              }}>
                {track.map((logo, i) => <Cell key={`${logo.name}-${i}`} logo={logo} />)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
window.Clients = Clients;
