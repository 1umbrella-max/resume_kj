// 모든 페이지에 같은 왼쪽 메뉴를 그립니다. (<aside class="side" id="side"></aside> 자리에)
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
    folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'
  };
  const svg = (p) => `<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${p}</svg>`;
  const inProjects = PF.projects.some((p) => p.id + '.html' === here);

  side.innerHTML = `
    <a class="logo" href="index.html">Portfolio</a>
    <nav class="nav" aria-label="메뉴">
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
})();
