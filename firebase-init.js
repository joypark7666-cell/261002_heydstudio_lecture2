// Firebase 초기화 (Spark 무료 요금제 기능만 사용: Analytics, Authentication)
// 설정값은 firebase-config.js. 페이지 컴포넌트는 아래 두 전역만 사용한다.
//   window.heydTrack(이벤트이름, {파라미터})   → Analytics 이벤트 (꺼져 있으면 아무 일도 안 함)
//   window.heydAuth.{subscribe, signIn, signOut} → Google 로그인 (꺼져 있으면 available=false)
import { firebaseConfig } from "./firebase-config.js";

const SDK = "https://www.gstatic.com/firebasejs/10.14.1";
const listeners = new Set();
const noop = () => {};

const heydAuth = {
  available: false,
  user: null,
  signIn: async () => null,
  signOut: async () => {},
  subscribe(cb) {
    listeners.add(cb);
    cb({ available: heydAuth.available, user: heydAuth.user });
    return () => listeners.delete(cb);
  },
};
const emit = () => listeners.forEach((cb) => cb({ available: heydAuth.available, user: heydAuth.user }));

window.heydAuth = heydAuth;
window.heydTrack = noop;

// 클릭·폼 시작 같은 공통 이벤트는 컴포넌트를 건드리지 않고 문서 전체에서 한 번에 수집한다.
document.addEventListener("click", (e) => {
  const a = e.target.closest && e.target.closest("a");
  if (!a) return;
  const href = a.getAttribute("href") || "";
  if (a.closest("header")) window.heydTrack("nav_click", { target: href });
  else if (href.startsWith("#")) window.heydTrack("cta_click", { target: href.slice(1) });
}, true);

const started = {};
document.addEventListener("focusin", (e) => {
  const sec = e.target.closest && e.target.closest("#order, #inquiry");
  if (sec && !started[sec.id]) {
    started[sec.id] = true;
    window.heydTrack("inquiry_start", { type: sec.id === "order" ? "design" : "lecture" });
  }
});

const configured = firebaseConfig && firebaseConfig.apiKey && !String(firebaseConfig.apiKey).startsWith("YOUR_");

async function init() {
  if (!configured) return; // 설정 전: 기능 꺼짐
  try {
    const [{ initializeApp }, analyticsMod, authMod] = await Promise.all([
      import(`${SDK}/firebase-app.js`),
      import(`${SDK}/firebase-analytics.js`),
      import(`${SDK}/firebase-auth.js`),
    ]);
    const app = initializeApp(firebaseConfig);

    // Analytics: 내 컴퓨터 테스트(localhost)는 통계에 섞이지 않게 제외
    const isLocal = ["localhost", "127.0.0.1"].includes(location.hostname);
    const hasId = firebaseConfig.measurementId && !String(firebaseConfig.measurementId).startsWith("YOUR_");
    if (hasId && !isLocal && (await analyticsMod.isSupported())) {
      const analytics = analyticsMod.getAnalytics(app);
      window.heydTrack = (name, params) => {
        try { analyticsMod.logEvent(analytics, name, params || {}); } catch (e) { /* 통계 실패는 무시 */ }
      };
    }

    // Authentication: 사이트 전체 Google 로그인 (상단 메뉴의 로그인 버튼, 사이트가 따로 저장하는 정보는 없음)
    const auth = authMod.getAuth(app);
    auth.languageCode = "ko";
    heydAuth.available = true;
    heydAuth.signIn = async () => {
      try {
        const r = await authMod.signInWithPopup(auth, new authMod.GoogleAuthProvider());
        return r && r.user ? { name: r.user.displayName || "", email: r.user.email || "" } : null;
      } catch (e) {
        if (e && (e.code === "auth/popup-closed-by-user" || e.code === "auth/cancelled-popup-request")) return null; // 사용자가 창을 닫음
        throw e;
      }
    };
    heydAuth.signOut = () => authMod.signOut(auth);
    authMod.onAuthStateChanged(auth, (u) => {
      heydAuth.user = u ? { name: u.displayName || "", email: u.email || "" } : null;
      emit();
    });
    emit();
  } catch (e) {
    console.warn("[firebase] 초기화 실패 — Firebase 기능 없이 계속합니다:", e);
  }
}
init();
