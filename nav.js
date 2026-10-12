// 모든 페이지에 같은 왼쪽 메뉴를 그립니다. (<aside class="side" id="side"></aside> 자리에)
// 휴대폰에서는 상단 바 + ☰ 버튼으로 접힙니다.
(function () {
  const side = document.getElementById('side');
  if (!side || !window.PF) return;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const here = (location.pathname.split('/').pop() || 'index.html').replace(/\?.*$/, '') || 'index.html';
  const wide = window.matchMedia('(min-width: 900px)').matches;
  const cur = (href) => (href === here ? ' aria-current="page"' : '');
  const icon = {
    home: '<path d="M4 11.5 12 5l8 6.5V19a1 1 0 0 1-1 1h-4v-5h-6v5H5a1 1 0 0 1-1-1z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    download: '<path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14"/>'
  };
  const svg = (p, s = 20) => `<svg aria-hidden="true" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
  const inProjects = PF.projects.some((p) => p.id + '.html' === here);

  side.innerHTML = `
    <div class="side-head">
      <a class="logo" href="index.html">Portfolio</a>
      <button type="button" class="menu-btn" aria-expanded="false" aria-controls="side-nav" aria-label="메뉴 열기">${svg(icon.menu, 22)}</button>
    </div>
    <nav class="nav" id="side-nav" aria-label="메뉴">
      <a class="h" href="index.html"${cur('index.html')}>${svg(icon.home)}홈</a>
      <a class="h" href="profile.html"${cur('profile.html')}>${svg(icon.user)}프로필</a>
      <details class="navgroup"${wide || inProjects ? ' open' : ''}>
        <summary class="h">${svg(icon.folder)}프로젝트<span class="chev" aria-hidden="true"></span></summary>
        ${PF.cats.map((c) => {
          const list = PF.projects.filter((p) => p.cat === c.id);
          const open = wide || list.some((p) => p.id + '.html' === here);
          return `<details class="navcat"${open ? ' open' : ''}>
            <summary>${esc(c.name)}<span class="chev" aria-hidden="true"></span></summary>
            <ul class="sub">${list.map((p) => `<li><a href="${p.id}.html"${cur(p.id + '.html')}>${esc(p.short)}</a></li>`).join('')}</ul>
          </details>`;
        }).join('')}
      </details>
    </nav>
    <a class="me" href="profile.html"><img src="profile.webp?v=2" alt=""><span><b>박경지</b><span>AI 기획자</span></span></a>`;

  const btn = side.querySelector('.menu-btn');
  btn.addEventListener('click', () => {
    const open = side.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  });

})();
