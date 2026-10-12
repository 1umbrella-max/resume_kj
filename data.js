// 프로젝트 목록 (홈 카드와 왼쪽 메뉴가 함께 사용)
// cat: 카테고리, short: 제목, client: 발주/브랜드, result: 한 줄 성과,
// contrib: 기여도(AI/UI/UX), badge: 대표 성과(콘텐츠), logo: 카드에 넣을 로고 이미지
window.PF = {
  cats: [
    { id: 'ai', name: 'AI 기획' },
    { id: 'ux', name: 'UI/UX 기획' },
    { id: 'content', name: '콘텐츠 기획' }
  ],
  projects: [
    { cat: 'ai', id: 'jellyi', short: '젤리아이 리뉴얼', client: '키즈엠', result: 'RFI부터 제안, WBS, 데모까지 리드', contrib: '기획 총괄', logo: 'img/logo_nxn.png' },
    { cat: 'ai', id: 'kofac', short: '정보교원 AI 연수', client: '한국과학창의재단', result: '사업관리 PL, 만족도 4.9점', contrib: '사업관리 총괄', logo: 'img/logo_kofac.png' },
    { cat: 'ai', id: 'gri', short: '경기연구원 PoC', client: '경기연구원', result: 'AI 에이전트 4종을 5주 만에 검증', contrib: 'PoC 기획 총괄', logo: 'img/logo_gri.png' },
    { cat: 'ai', id: 'openinno', short: '오픈이노베이션', client: '아이스크림미디어', result: 'AI 교사 업무비서, 교직원 87명 설문으로 MVP 정의', contrib: '서비스 기획 공동', logo: 'img/logo_iscream.png' },
    { cat: 'ai', id: 'samsung', short: 'ETF AI 에이전트', client: '삼성자산운용', result: '서비스 기획 전담, 정확도 93%', contrib: '서비스 기획 총괄', logo: 'img/logo_kodex.png' },
    { cat: 'ai', id: 'yes24', short: '디지털 참고서 ISMP', client: '예스24', result: '8주 만에 AI 기능 5종 정의', contrib: 'AI 기능 기획 총괄', logo: 'img/logo_yes24.png' },
    { cat: 'ux', id: 'anotherlounge', short: '어나더라운지', client: '데이팅 앱', result: 'MVP 2주 매출 600만 원, 전환율 40%', contrib: '기획 총괄' },
    { cat: 'ux', id: 'fittrip', short: '핏트립', client: '여행 플랫폼', result: '예비창업패키지 선정, 5,500만 원 확보', contrib: '기획 총괄' },
    { cat: 'content', id: 'bulg', short: '코오롱글로벌 BULG', client: '코오롱글로벌', result: '부울경 로컬 매거진 카드뉴스 30편 이상', badge: '시리즈 6종 운영' },
    { cat: 'content', id: 'rovyn', short: 'K-뷰티 Rovyn', client: 'K-뷰티 예약 플랫폼', result: '광고 없이 조회수 1만, DM 문의 하루 30건', badge: '조회수 10K+' },
    { cat: 'content', id: 'refurlab', short: 'IT 리퍼연구소', client: 'IT 리퍼브 브랜드', result: '매거진형 콘텐츠로 구매 전환율 상승', badge: '전환율 +33%' },
    { cat: 'content', id: 'walkd', short: '웰니스 Walkd', client: '웰니스 브랜드', result: '신규 계정 1개월 팔로워 1,800명', badge: '팔로워 1.8K' },
    { cat: 'content', id: 'redesign', short: '브랜드 리디자인 3종', client: '뷰티, 라이프스타일', result: '뷰티, 라이프스타일 브랜드 프리미엄 재설계', badge: '브랜드 3곳' }
  ]
};
