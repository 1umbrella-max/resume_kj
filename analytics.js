// 방문자 통계 (Google Analytics 4)
// GA4에서 받은 측정 ID(G-로 시작)를 아래 따옴표 안에 넣으면 모든 페이지에서 통계가 수집됩니다.
const GA_ID = '';

if (GA_ID) {
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID);
}
