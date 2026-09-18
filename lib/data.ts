export const profile = {
  nameKo: "한현식",
  nameEn: "Hyun Sik Han",
  title: "Global Project Manager · UX Manager",
  tagline:
    "글로벌 플랫폼과 신규 서비스를 0에서 1로, 그리고 1에서 N으로 확장시키는 PM입니다.",
  email: "hahysi2030@gmail.com",
  phone: "+82 10 4183 3803",
  linkedin: "https://www.linkedin.com/in/hahysi2030",
  linkedinLabel: "linkedin.com/in/hahysi2030",
  resumeUrl: "/resume/Han_Hyunsik_Resume_2026.pdf",
  summary: [
    "신규 사내 앱의 서비스 운영 정책, CMS 관리 기준, 앱 배포·버전 관리 및 운영 이관 체계를 수립하여 런칭 이후 운영 안정화를 리드",
    "QA 오류율 80% 발생 상황에서 이슈 우선순위와 기능별 오픈 전략을 재정의해 오류율 10% 미만으로 개선하고 일정 내 런칭 완료",
    "대규모 글로벌 플랫폼의 다국가 요구사항 수급, QA/UAT, 라이브 이슈 대응 및 운영 이관을 수행하며 플랫폼 확산 프로젝트 관리",
  ],
  education: {
    school: "The Pennsylvania State University, University Park",
    major: "Security and Risk Analysis - Information and Cyber Security",
    honors: "Dean's List 2018 FA, 2019 SP, 2020 SP",
    certificate: "National Security Agency (NSA) Certificate",
  },
};

export const skills = {
  domains: [
    "Global Project Management",
    "UX Planning & Standardization",
    "Product / Service Planning (0→1)",
    "CX & FRD Management",
    "Cross-border PMO",
    "App/CMS Launch & Ops Transition",
  ],
  tools: [
    "Figma",
    "Jira",
    "Confluence",
    "AEM (Adobe Experience Manager)",
    "Apple App Store Connect",
    "Google Play Console",
    "MS App Center",
    "Perforce",
  ],
};

export interface Engagement {
  title: string;
  period: string;
  role: string;
  tasks: string[];
  outcome?: string;
  collaboration?: string;
  tools?: string[];
  link?: { label: string; href: string };
}

export interface ExperienceStint {
  company: string;
  companyNote?: string;
  team: string;
  period: string;
  engagements: Engagement[];
}

export const experience: ExperienceStint[] = [
  {
    company: "Concentrix Korea",
    companyNote: "컨센트릭스 코리아",
    team: "CiX (Concentrix Interactive eXperience) · UIUX 기획, 글로벌 프로젝트 관리",
    period: "2025.10 ~ 현재",
    engagements: [
      {
        title: "LG전자 LG.com 플랫폼 B2B 글로벌 확산 프로젝트",
        period: "2026.01 ~ 현재",
        role: "UX 기획, 페이지 제작 관리",
        tasks: [
          "총 15개국 LG.com 사이트 대상 글로벌 공통 UI/UX 기준 정립을 위한 UX 표준화 가이드 수립 리드",
          "B2B 글로벌 웹사이트 확산을 목표로 기존 해외 법인별 운영 방식 상이 및 UI/UX 적용 차이점 문제를 글로벌 공통 기준 수립으로 해결",
          "해외 법인·사이트별 상이했던 콘텐츠 구조 및 구성을 글로벌 표준 사이트 기준의 지역 맞춤 UX 표준화 가이드로 제작 리드",
          "UX 표준화 가이드 기반 페이지 제작 및 개발팀 협업, QA 진행",
        ],
        outcome: "1차 그룹 7개국 사이트 진행 완료, 2차 그룹 8개국 9개 사이트 진행 중",
        collaboration: "LG전자 B2B 채널팀 / LG CNS LG닷컴 개발팀 / CNX LG닷컴 제작팀",
        tools: ["Confluence", "Jira", "AEM", "Figma"],
      },
      {
        title: "현대자동차 Genesis.com 플랫폼 유럽 글로벌 확산 프로젝트",
        period: "2025.10 ~ 2025.12",
        role: "이탈리아법인 PMO, 신규 컴포넌트 디자인 제작 관리",
        tasks: [
          "유럽 4개국(프랑스/스페인/이탈리아/네덜란드) 확산 대상 로컬 법인 PMO 및 신규 컴포넌트 디자인 UX 리뷰·개발 관리",
          "신규 차량 및 비즈니스 확장에 따른 웹사이트 개편 프로젝트로 대표 법인 4개국 글로벌 확산 진행",
          "확산 대상 4개국 중 이탈리아법인 담당 PMO로 현지 요구사항 수급과 확산 범위 조율 담당",
          "확산 외 신규 개선 디자인 컴포넌트 6종 제작 관련 UX 리뷰, 디자인 제작, 개발 관리 및 QA 리포트 발행",
        ],
        outcome:
          "라이브 일정 내 이탈리아 법인 요구사항 100% 반영 및 운영 이관 완료 / 신규 개선 컴포넌트 6종 제작 및 반영 완료",
        collaboration: "현대자동차 제네시스 / 현대오토에버 해외판매전략팀 / CiX 디자인팀",
      },
    ],
  },
  {
    company: "PTKOREA",
    companyNote: "제일 펑타이 코리아",
    team: "GXG (Global eXperience Group) · PM, 서비스 기획, PMO",
    period: "2023.08 ~ 2025.10",
    engagements: [
      {
        title: "삼성전자 Samsung.com 플랫폼 미국법인 UX 개편 / Migration 프로젝트",
        period: "2025.02 ~ 2025.09",
        role: "프로젝트 PMO",
        tasks: [
          "SEA 미국법인과 HQ 본사 간 UX 요구사항 수급 및 조율, 이슈사항 관리 및 프로젝트 일정 관리",
          "Samsung.com 글로벌 UX 개편에 따른 기존 비-글로벌 미국법인 사이트의 Frontend/Backend 글로벌 이관과 UX 개편 동시 진행",
          "UX 개편 대상 범위 파악 및 사업부별 페이지 관리에 따른 단계별 라이브 일정 및 미국법인 제작 결과물 관리",
          "글로벌 이관과 UX 개편 동시 진행에 따른 글로벌 운영·개발 이관 프로젝트 PMO와 개편 영향도 관련 협업",
        ],
        outcome: "글로벌 오픈 일정에 맞춰 SEA 미국법인 UX 요구사항 반영 및 개편 사이트 오픈 완료",
        collaboration:
          "삼성전자 D2C UX 그룹, Dev 그룹 / 삼성전자 미국법인 UX·개발·프로덕트 팀 / EY 삼성닷컴 운영 PMO",
        tools: ["Confluence", "Jira", "AEM", "Figma"],
      },
      {
        title: "PTKOREA 사내 앱 서비스 개발 프로젝트 (PRODY)",
        period: "2023.08 ~ 2025.01",
        role: "서비스 기획, PM",
        tasks: [
          "신규 사내 앱(Prody) 및 CMS 기획, 개발, 디자인, 런칭, 운영 이관까지 프로젝트 End-to-End 프로세스 리드",
          "사내 커뮤니티·교육 자료·이벤트 콘텐츠가 여러 플랫폼에 분산되어 발생한 접근성·사용성 저하 문제 개선을 위해 조직문화 기능을 하나의 사내 앱으로 통합",
          "현업 부서(인사개발팀, 채용팀, 홍보팀, IT팀, 재정팀 등) 인터뷰를 통해 운영 이슈 분석 및 서비스 기능 요구사항 수급",
          "신규 앱 내 기능(커뮤니티, 캘린더, 라이브 스트리밍, 이벤트 등) 기획과 CMS 사이트 기획 및 전체 서비스 정책 수립",
          "해외 개발사 및 인프라 업체와 협업하여 개발/인프라 구축, 내부 보안 요건 검토 등 앱 마켓 출시 포함 전체 개발 관리",
          "앱 스토어, 플레이 스토어, MS 앱 센터 등록을 통한 앱 배포 및 버전 관리",
          "런칭 후 오픈 이벤트 관련 홍보팀과 협업하여 운영안 수립 및 앱 운영팀에게 운영 이관",
        ],
        outcome:
          "QA 오류율 80% → 10% 미만 개선, 기능별 순차적 오픈 전략으로 일정 내 오픈 완료",
        collaboration:
          "제일기획 인도법인 EC(Experience Commerce) 개발팀 / 호스트웨이 인프라팀 / GXG 디자인팀 / IT팀 / 인재개발팀 / 인사팀 / 홍보팀 / 재정팀",
        tools: [
          "Confluence",
          "Jira",
          "Figma",
          "Apple App Store Connect",
          "Google Play Console",
          "MS App Center",
        ],
      },
      {
        title: "삼성전자 Samsung.com Shop App 플랫폼 UX 개선 프로젝트",
        period: "2024.01 ~ 2024.03",
        role: "서비스 기획, PM",
        tasks: [
          "갤럭시 플래그십 Unpack 프로모션 대상 앱 내 FAB(Floating Action Button) 기획으로 유저 유입률 30% 증가에 기여",
          "2023년 Unpack 프로모션 Lesson Learned 자료 분석, 높은 트래픽 대비 앱 내 프로모션 진입점 부족으로 인한 유저 이탈 문제 해결을 위한 개선 기획",
          "홈 화면에서 라이브 스트리밍, 프리 오더, 이벤트 페이지 등에 단축 경로로 접근하는 FAB 신규 도입 제안 및 기획",
          "광고주 요구사항 기반 상위 기획을 위한 Wireframe, UI 가이드 작성 및 디자인 GUI 가이드 관리",
        ],
        outcome: "Samsung Shop App 내 FAB 기능 도입 완료 / 2024년 Unpack 전체 프로모션 유입률 30% 증가 기여",
        collaboration: "삼성전자 D2C UX 그룹",
        tools: ["Figma"],
      },
    ],
  },
  {
    company: "NCSOFT",
    companyNote: "엔씨소프트",
    team: "UX Center · 프로젝트 매니저",
    period: "2023.02 ~ 2023.07",
    engagements: [
      {
        title: "Aion2 · B&S Neo Classic 게임 개발 프로젝트",
        period: "2023.02 ~ 2023.07",
        role: "Project Manager",
        tasks: [
          "UX Center 및 프로젝트 개발실 간 발생하는 커뮤니케이션 담당, 업무 프로세스 수립 및 내부 프로젝트 이슈 관리",
          "신규 UX Center 조직 개편 및 PM 팀 신설로 프로세스 미수립 상태에서 발생하는 커뮤니케이션·이슈 관리",
          "PM 팀 주도 내부 프로세스 수립에 참여하여 각 프로젝트별 UXUI 개발 이슈 관리 및 타 부서 간 커뮤니케이션 담당",
        ],
        outcome:
          "UX Center 내 BX, UX, 연출 파트 간 협업과 외부 개발실 이슈 관리 프로세스 수립으로 원활한 커뮤니케이션 진행",
        collaboration: "Aion2 개발실 / B&S Neo 개발실 / UX Center BX실, UX실",
        tools: ["Redmine 기반 자체 관리 플랫폼", "Perforce", "Confluence", "Jira", "Figma"],
      },
    ],
  },
  {
    company: "NPIXEL",
    companyNote: "엔픽셀",
    team: "Sound Team · 프로젝트 매니저",
    period: "2022.09 ~ 2023.01",
    engagements: [
      {
        title: "GranSaga · Chrono Odyssey · Metaverse/NFT 게임 운영 및 개발 프로젝트",
        period: "2022.09 ~ 2023.01",
        role: "Project Manager",
        tasks: [
          "개발 프로젝트 내 사운드 이슈 관련 내부 프로세스 개선 및 개발 부서 협업을 통한 해결률 개선",
          "라이브 운영 프로젝트(GranSaga) 사운드 작업 및 이슈 관리를 통한 라이브 운영팀 협업",
          "신규 개발 프로젝트(Chrono Odyssey, Metaverse/NFT) 사운드 개발 작업 방향성 협의 및 이슈 관리",
          "해외 작곡가(Chris Velasco) 커뮤니케이션 담당으로 프로젝트 계약, 작곡 스케줄, 레퍼런스 문서 번역 및 이슈 관리",
        ],
        outcome: "라이브 운영 및 신규 개발 프로젝트의 머지 버전 관리·사운드 리소스 누락 이슈 관리 개선",
        collaboration: "GranSaga 운영팀 / Chrono Odyssey 개발실 / Metaverse·NFT 개발실 / 영상팀 / 아트팀",
        tools: ["Perforce", "Confluence", "Jira", "Figma"],
      },
    ],
  },
  {
    company: "PTKOREA",
    companyNote: "제일 펑타이 코리아",
    team: "Global eXperience Group · PM, AE, 플랫폼 기획",
    period: "2020.09 ~ 2022.09",
    engagements: [
      {
        title: "삼성전자 Samsung.com 플랫폼 Online B2B Business 글로벌 확산 프로젝트",
        period: "2022.05 ~ 2022.09",
        role: "PM",
        tasks: [
          "총 25개국 삼성닷컴 사이트 내 B2B 페이지(Why Samsung SMB, Common EPP) 제작 및 확산 관리",
          "학생·관계사 직원 대상 삼성 Shop 사이트 랜딩 페이지 제작, 25개국 약 70개 사이트 확산 프로젝트 진행",
          "글로벌 프로덕션 센터 제작 일정 및 단계별 확산에 따른 UAT·QA 관리와 라이브 런칭 이슈 대응",
        ],
        outcome:
          "프로젝트 일정 내 25개국 약 70여 사이트의 3가지 유형 페이지 라이브 런칭 100% 완료 및 운영 이관 완료",
        collaboration: "삼성전자 B2B 온라인비즈니스팀 / 제일기획 디지털플랫폼팀 / EY 삼성닷컴 운영 PMO",
        tools: ["Confluence", "Jira", "AEM"],
      },
      {
        title: "삼성전자 Samsung.com CX 개선 프로젝트 — Financial CX FRD Management",
        period: "2021.12 ~ 2022.04",
        role: "AE, 플랫폼 기획",
        tasks: [
          "글로벌 삼성닷컴 CX 개선 프로젝트 중 소비자 구매 여정 UX 개편 과제로 UX 개선 및 프로토타입 개발 관리",
          "주문 및 결제 여정에 따른 Buying Page, Cart, Checkout Page 프로토타입 개발 관리",
          "프로토타입 대상 페이지 중 Buying Page의 FRD(Functional Requirements Document) 작성 및 관리",
        ],
        outcome: "광고주 요구사항에 맞춘 개선 요건 수립, 구매 여정 프로토타입 개발 및 일정 내 납품 완료",
        collaboration: "삼성전자 CX팀 / 제일기획 옴니채널팀 / 한봄 스튜디오 개발사",
        tools: ["Confluence"],
      },
      {
        title: "삼성전자 Samsung.com 플랫폼 B2B P6 글로벌 확산 프로젝트",
        period: "2021.03 ~ 2021.11",
        role: "PM",
        tasks: [
          "총 80여 개국 삼성닷컴 B2B 사이트 개편 주요 사업부(IM, VD, DA) 전체 페이지 제작 및 확산 관리",
          "80여 개국 글로벌 법인별 B2B 사이트 내 콘텐츠 및 기능 요구사항 수급 및 반영을 위한 커뮤니케이션 담당",
          "사업부와 글로벌 법인별 상이한 정책 및 요구사항을 프로젝트 PMO와 협업하며 AEM 환경 내 제작 정책 협의",
        ],
        outcome:
          "프로젝트 일정 내 80여 개국 사이트의 주요 사업부(IM, VD, DA) 페이지 100% 라이브 런칭 완료 및 운영 이관 완료",
        collaboration: "삼성전자 D2C팀 / 제일기획 디지털플랫폼팀 / EY 삼성닷컴 확산 PMO",
        tools: ["Confluence", "Jira", "AEM"],
      },
      {
        title: "삼성전자 2021 Galaxy S21 Unpack 소비자 교육용 영상 콘텐츠 제작 프로젝트",
        period: "2020.12 ~ 2021.02",
        role: "AE, 영상 기획",
        tasks: [
          "Galaxy S21 Unpack 프로모션 내 제품 기능 관련 소비자 교육용 영상 콘텐츠 기획 및 제작 관리",
          "담당 테마(Home Entertainment) 영상 제작용 스토리보드 기획 및 작성",
        ],
        outcome:
          "프로젝트 일정 내 요구사항 반영 및 제작 완료하여 삼성전자 S+ 채널 업로드 완료",
        collaboration: "GXG 영상 제작사",
        tools: ["MS Office"],
        link: { label: "완성 영상 보기", href: "https://youtu.be/XVEYUf4ic-o" },
      },
      {
        title: "삼성전자 Samsung.com 플랫폼 B2C P6 글로벌 확산 프로젝트",
        period: "2020.09 ~ 2020.11",
        role: "PM",
        tasks: [
          "총 80여 개국 삼성닷컴 B2C 사이트 내 약 6,000여 개의 PF(Product Finder) 페이지 제작 관리",
          "80여 개국 글로벌 법인별 PF 페이지 내 제품 및 기능 요구사항 수급 및 반영을 위한 커뮤니케이션 담당",
          "글로벌 프로덕션 센터 제작 일정 및 AEM 환경 페이지 제작 관리, UAT·QA 검수 및 라이브 이슈 대응",
        ],
        outcome: "프로젝트 일정 내 80여 개국 사이트별 PF 페이지 요구사항 반영 및 100% 라이브 런칭 완료",
        collaboration: "삼성전자 D2C팀 / 제일기획 디지털플랫폼팀 / EY 삼성닷컴 확산 PMO",
        tools: ["Confluence", "Jira", "AEM"],
      },
    ],
  },
  {
    company: "PTKOREA",
    companyNote: "제일 펑타이 코리아",
    team: "Global eXperience Group · Global AE, 플랫폼 기획 인턴",
    period: "2019.07 ~ 2020.02",
    engagements: [
      {
        title: "삼성전자 미국법인 Elite 플랫폼 Reward Service App & CMS Portal 개발 프로젝트",
        period: "2019.07 ~ 2020.02",
        role: "Global AE, 플랫폼 기획",
        tasks: [
          "내외부 관계사 및 직원용 교육·보상 프로그램 앱 서비스 및 관리 포털(CMS) 구축 기획",
          "삼성전자 미국법인 약 15만 명의 파트너사 및 본사 직원 대상 앱 서비스 구축을 목표로 진행",
          "미국법인 내 앱 서비스 요구사항 및 프로그램 관련 정책에 따른 스토리보드 기획 및 FRD 작성",
        ],
        outcome: "코로나 사태로 서비스 미오픈되었지만, 전체 서비스 개발 완료 및 내부 검수 완료까지 진행",
        collaboration: "삼성전자 미국법인 Reward 서비스·개발팀 / 제일기획 옴니채널팀 / 리젠 개발사",
        tools: ["Confluence"],
      },
    ],
  },
];

export interface CaseStudyImage {
  src: string;
  alt: string;
  caption: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  period: string;
  role: string;
  tags: string[];
  stats: { value: string; label: string }[];
  challenge: string[];
  approach: string[];
  results: string[];
  collaboration: string;
  tools: string[];
  images: CaseStudyImage[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "lg-com-global-ux",
    title: "LG.com B2B 글로벌 UX 표준화",
    subtitle: "15개국 법인이 제각각 운영하던 B2B 사이트에 하나의 UX 기준을 세우다",
    company: "LG전자 · Concentrix (CiX)",
    period: "2026.01 ~ 현재",
    role: "UX 기획 · 페이지 제작 관리",
    tags: ["Global UX Standardization", "B2B", "PM"],
    stats: [
      { value: "15개국", label: "대상 법인 사이트" },
      { value: "2개 그룹", label: "단계별 순차 확산" },
      { value: "7개국", label: "1차 그룹 진행 완료" },
    ],
    challenge: [
      "LG.com은 국가·법인별로 오랜 기간 독립적으로 운영되며 콘텐츠 구조와 UI/UX 적용 기준이 서로 달라졌습니다.",
      "B2B 비즈니스를 글로벌로 확산하려는 목표 아래, 이 UX 편차를 그대로 두면 법인마다 다시 각자 방식으로 페이지를 만들며 품질과 속도가 흔들릴 위험이 있었습니다.",
    ],
    approach: [
      "15개국 LG.com 사이트를 전수 조사하여 콘텐츠 구조와 UI/UX 적용 차이점을 구조화하고, 글로벌 공통 기준의 필요성과 범위를 정의했습니다.",
      "글로벌 표준 사이트를 기준선으로 삼아, 지역별 규제·언어·비즈니스 맥락을 반영한 '지역 맞춤형 UX 표준화 가이드'를 제작 리드했습니다.",
      "가이드 확정 후에는 실제 페이지 제작 단계까지 이어져, 개발팀과 함께 표준을 적용하고 QA로 준수 여부를 검증하는 구조를 운영했습니다.",
      "법인을 1차·2차 그룹으로 나누어 순차 확산함으로써 리스크를 분산하고, 1차 그룹에서 얻은 교훈을 2차 그룹 가이드에 즉시 반영했습니다.",
    ],
    results: [
      "1차 그룹 7개국 사이트에 UX 표준화 가이드 적용을 완료했습니다.",
      "2차 그룹 8개국 9개 사이트가 동일 기준으로 진행 중이며, 확산 속도와 품질 편차를 크게 줄였습니다.",
    ],
    collaboration: "LG전자 B2B 채널팀 / LG CNS LG닷컴 개발팀 / CNX LG닷컴 제작팀",
    tools: ["Confluence", "Jira", "AEM", "Figma"],
    images: [],
  },
  {
    slug: "genesis-europe-rollout",
    title: "Genesis.com 유럽 4개국 확산 & 이탈리아법인 PMO",
    subtitle: "신규 컴포넌트 6종을 만들며 동시에 4개국 로컬 요구사항을 조율하다",
    company: "현대자동차 Genesis · Concentrix (CiX)",
    period: "2025.10 ~ 2025.12",
    role: "이탈리아법인 PMO · 신규 컴포넌트 디자인 제작 관리",
    tags: ["PMO", "Design Ops", "Multi-country Rollout"],
    stats: [
      { value: "4개국", label: "프랑스·스페인·이탈리아·네덜란드" },
      { value: "6종", label: "신규 디자인 컴포넌트" },
      { value: "100%", label: "이탈리아 요구사항 반영률" },
    ],
    challenge: [
      "제네시스의 신규 차량 출시와 비즈니스 확장에 맞춰 유럽 대표 법인 4개국의 웹사이트를 동시에 개편해야 했습니다.",
      "국가마다 로컬 요구사항이 다른 상황에서, 저는 이탈리아법인 PMO로서 현지 요구사항을 수급하는 동시에 신규 디자인 컴포넌트 개발도 함께 관리해야 했습니다.",
    ],
    approach: [
      "이탈리아법인의 요구사항을 수급하고 전체 확산 범위와 우선순위를 조율하는 PMO 역할을 수행했습니다.",
      "확산 작업과 별도로, 전체 프로젝트에 필요한 신규 개선 디자인 컴포넌트 6종에 대해 UX 리뷰와 디자인 제작을 리드했습니다.",
      "디자인 확정 후 개발 진행 상황을 관리하고, 품질 보증을 위한 QA 리포트를 직접 발행하며 라이브 전 리스크를 통제했습니다.",
    ],
    results: [
      "라이브 일정 내 이탈리아 법인 요구사항을 100% 반영하고 운영 이관까지 완료했습니다.",
      "신규 개선 컴포넌트 6종의 제작과 반영을 완료해, 이후 다른 법인 확산에도 재사용 가능한 자산을 남겼습니다.",
    ],
    collaboration: "현대자동차 제네시스 / 현대오토에버 해외판매전략팀 / CiX 디자인팀",
    tools: ["Figma", "Confluence", "Jira"],
    images: [],
  },
  {
    slug: "prody-inhouse-app",
    title: "PRODY — 사내 앱 & CMS, 기획부터 운영 이관까지",
    subtitle: "여러 플랫폼에 흩어진 조직문화를 앱 하나로 통합한 End-to-End 프로젝트",
    company: "PTKOREA",
    period: "2023.08 ~ 2025.01",
    role: "서비스 기획 · PM (End-to-End 리드)",
    tags: ["0→1 Product", "App/CMS", "PM", "End-to-End"],
    stats: [
      { value: "80% → 10%↓", label: "QA 오류율 개선" },
      { value: "5개 부서", label: "요구사항 인터뷰 대상" },
      { value: "3개 마켓", label: "App Store · Play · MS App Center 동시 배포" },
    ],
    challenge: [
      "사내 커뮤니티, 교육 자료, 이벤트 콘텐츠가 여러 플랫폼에 흩어져 있어 접근성과 사용성이 떨어지는 문제가 있었습니다.",
      "이를 해결하기 위해 조직문화 관련 기능을 하나의 사내 앱으로 통합하는 신규 서비스 'PRODY'를 기획, 개발, 디자인, 런칭, 운영 이관까지 제가 End-to-End로 리드했습니다.",
    ],
    approach: [
      "인사개발팀, 채용팀, 홍보팀, IT팀, 재정팀 등 현업 부서를 직접 인터뷰하여 운영 이슈와 희망 기능 요구사항을 수급했습니다.",
      "커뮤니티, 캘린더, 라이브 스트리밍, 이벤트 등 신규 앱 기능과 CMS 사이트 기획, 전체 서비스 정책 수립까지 설계했습니다.",
      "해외 개발사 및 인프라 업체와 협업하며 개발·인프라 구축을 진행하고, 내부 보안 요건 검토부터 앱 마켓 출시까지 프로젝트 전체 개발을 관리했습니다.",
      "앱 스토어, 플레이 스토어, MS 앱 센터에 동시 등록하여 앱 배포 및 버전 관리 체계를 수립했습니다.",
      "QA 단계에서 오류율이 80%에 달하는 상황에 직면했을 때, 전체 기능을 한 번에 열기보다 이슈 우선순위를 재정의하고 기능별 순차 오픈 전략으로 방향을 바꿨습니다.",
      "런칭 후에는 홍보팀과 협업해 오픈 이벤트 운영안을 수립하고, 운영팀에게 안정적으로 서비스를 이관했습니다.",
    ],
    results: [
      "QA 오류율을 80%에서 10% 미만으로 개선하면서도 일정 내 런칭을 완료했습니다.",
      "기능별 순차 오픈 전략 덕분에 품질 저하 없이 정해진 런칭 일정을 지킬 수 있었습니다.",
      "런칭 이후의 서비스 운영 정책, CMS 관리 기준, 버전 관리 체계까지 수립해 운영 안정화까지 책임졌습니다.",
    ],
    collaboration:
      "제일기획 인도법인 EC(Experience Commerce) 개발팀 / 호스트웨이 인프라팀 / GXG 디자인팀 / IT팀 / 인재개발팀 / 인사팀 / 홍보팀 / 재정팀",
    tools: ["Confluence", "Jira", "Figma", "Apple App Store Connect", "Google Play Console", "MS App Center"],
    images: [
      {
        src: "/images/projects/prody-user-flow.png",
        alt: "PRODY Booking Service User Flow",
        caption: "PRODY 예약 서비스 User Flow — 사용자와 관리자(CMS) 양측 시나리오를 함께 설계",
      },
      {
        src: "/images/projects/prody-cms-admin.png",
        alt: "PRODY CMS Admin Booking Status",
        caption: "실사용 단계까지 이어진 CMS 관리자 화면 — 예약 상태 관리 및 다국어 정책 정의",
      },
    ],
  },
  {
    slug: "samsung-shop-app-fab",
    title: "Samsung Shop App — FAB 도입으로 유입률 30% 증가",
    subtitle: "이전 프로모션의 이탈 데이터를 근거로 새로운 진입 경로를 설계하다",
    company: "삼성전자 · PTKOREA (GXG)",
    period: "2024.01 ~ 2024.03",
    role: "서비스 기획 · PM",
    tags: ["UX Design", "Mobile App", "Growth"],
    stats: [
      { value: "+30%", label: "Unpack 프로모션 유입률 증가" },
      { value: "1개", label: "신규 FAB 컴포넌트" },
    ],
    challenge: [
      "2023년 갤럭시 Unpack 프로모션의 Lesson Learned를 분석한 결과, 플래그십 이벤트 기간 트래픽은 높았지만 앱 내 프로모션 진입점이 부족해 유저 이탈이 발생한 것으로 나타났습니다.",
      "2024년 Unpack을 앞두고, 같은 문제가 반복되지 않도록 앱 내 사용자 경험을 개선해야 했습니다.",
    ],
    approach: [
      "이전 프로모션 데이터 분석을 기반으로, 홈 화면에서 라이브 스트리밍·프리오더·이벤트 페이지에 단축된 경로로 접근할 수 있는 FAB(Floating Action Button)를 신규 도입하는 방안을 제안하고 기획했습니다.",
      "광고주 요구사항을 반영한 상위 기획을 위해 Wireframe과 UI 가이드를 직접 작성하고, 디자인 GUI 가이드를 관리했습니다.",
      "기능 반영을 위한 디자인 방향성을 수립하고, 최종 디자인 산출물을 끝까지 관리했습니다.",
    ],
    results: [
      "Samsung Shop App 내 FAB 기능 도입을 완료했습니다.",
      "2024년 Unpack 전체 프로모션 유입률이 30% 증가하는 데 기여했습니다.",
    ],
    collaboration: "삼성전자 D2C UX 그룹",
    tools: ["Figma"],
    images: [
      {
        src: "/images/projects/shop-app-wireframe.png",
        alt: "Samsung Shop App FAB Wireframe",
        caption: "Unpack 등록 완료 배너 → 팝업 흐름 Wireframe 및 인터랙션 정의",
      },
      {
        src: "/images/projects/shop-app-gui-spec.png",
        alt: "Samsung Shop App GUI Spec",
        caption: "Small/Big 타입별 이미지 컴포넌트 GUI 가이드 — 개발 협업을 위한 상세 스펙",
      },
    ],
  },
  {
    slug: "samsung-global-rollout",
    title: "Samsung.com 글로벌 플랫폼 확산 — 80개국, 6,000+ 페이지",
    subtitle: "B2C·B2B·CX 세 갈래의 글로벌 확산을 3년에 걸쳐 운영하다",
    company: "삼성전자 · PTKOREA (GXG)",
    period: "2020.09 ~ 2022.09",
    role: "PM · AE · 플랫폼 기획",
    tags: ["Global Rollout at Scale", "AEM", "PMO"],
    stats: [
      { value: "80여 개국", label: "B2C/B2B P6 글로벌 확산" },
      { value: "6,000+", label: "Product Finder 페이지 제작" },
      { value: "100%", label: "일정 내 라이브 런칭 완료율" },
    ],
    challenge: [
      "삼성닷컴은 국가마다 사업부(IM/VD/DA)와 비즈니스 유형(B2C/B2B)이 달라, 글로벌 확산 프로젝트마다 요구사항의 결이 전부 달랐습니다.",
      "2020년부터 2022년까지 저는 B2C P6, B2B P6, Online B2B, CX 개선까지 이어지는 일련의 글로벌 확산 프로젝트에서 PM과 AE 역할을 오가며 규모와 성격이 다른 확산을 연속으로 운영했습니다.",
    ],
    approach: [
      "B2C P6 확산에서는 80여 개국 사이트의 약 6,000여 개 Product Finder 페이지를, 제품 종류·분류·SKU 등 국가별 특이사항까지 고려해 제작 관리했습니다.",
      "이어진 B2B P6 확산에서는 80여 개국의 IM/VD/DA 사업부 페이지 전체를, 사업부와 법인별로 상이한 정책을 PMO와 함께 AEM 환경 제작 정책으로 정리하며 진행했습니다.",
      "Online B2B 확산에서는 25개국 약 70개 사이트의 학생·관계사 대상 랜딩 페이지(Why Samsung SMB, Common EPP)를 별도로 기획·제작 관리했습니다.",
      "CX 개선 프로젝트에서는 AE로서 Buying Page, Cart, Checkout Page 프로토타입 개발을 관리하고, Buying Page의 FRD(Functional Requirements Document)를 직접 작성했습니다.",
      "매 확산마다 글로벌 프로덕션 센터의 제작 일정을 관리하고 UAT/QA로 품질을 검수한 뒤, 라이브 전후 이슈 대응과 운영 이관까지 매듭지었습니다.",
    ],
    results: [
      "B2C P6, B2B P6, Online B2B 세 확산 모두 프로젝트 일정 내 100% 라이브 런칭과 운영 이관을 완료했습니다.",
      "CX 개선 프로젝트에서는 광고주 요구사항에 맞춘 개선 요건을 수립하고 구매 여정 프로토타입을 일정 내 납품했습니다.",
      "서로 다른 이해관계자(삼성전자 D2C팀, 제일기획, EY PMO)를 오가며 3년간 대규모 글로벌 운영을 끊김 없이 지속했습니다.",
    ],
    collaboration: "삼성전자 D2C팀 / B2B 온라인비즈니스팀 / CX팀 / 제일기획 디지털플랫폼팀·옴니채널팀 / EY 삼성닷컴 PMO",
    tools: ["Confluence", "Jira", "AEM (Adobe Experience Manager)"],
    images: [
      {
        src: "/images/projects/samsung-scope-of-site.png",
        alt: "Samsung.com Online B2B Scope of Site",
        caption: "25개국 확산 범위 관리 문서 — 법인·사업부별 Scope of Site 트래킹",
      },
      {
        src: "/images/projects/samsung-checkout-prototype.png",
        alt: "Samsung.com Checkout Prototype",
        caption: "CX 개선 과제 — Buying/Checkout Page 프로토타입",
      },
      {
        src: "/images/projects/samsung-live-site.png",
        alt: "Samsung.com Live Site",
        caption: "글로벌 확산이 반영되어 라이브된 Samsung.com",
      },
    ],
  },
];
