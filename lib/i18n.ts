export type Locale = "ko" | "en";

export interface UiDict {
  nav: { home: string; work: string; approach: string; experience: string; contact: string };
  langLabel: string;
  resumeButton: string;
  connectButton: string;
  heroKicker: string;
  heroHeadline: string;
  heroSubtext: string;
  heroAsideTitle: string;
  heroAsideLines: string[];
  handwrittenNote: string;
  languagesLabel: string;
  approachKicker: string;
  approachTitle: string;
  approachSubtitle: string;
  approachOutro: string;
  workKicker: string;
  workTitle: string;
  workSubtitle: string;
  viewAllWork: string;
  skillsTitle: string;
  domainLabel: string;
  toolsLabel: string;
  educationLabel: string;
  experienceTitle: string;
  experienceSubtitle: string;
  experienceViewAll: string;
  experiencePageIntro: string;
  educationSectionLabel: string;
  contactTitle: string;
  contactSubtitle: string;
  footerTagline: string;
  footerQuote: string;
  roleLabel: string;
  companyLabel: string;
  periodLabel: string;
  backToWork: string;
  nextProject: string;
  challengeTitle: string;
  approachStepsTitle: string;
  artifactsTitle: string;
  resultsTitle: string;
  collaborationTitle: string;
  toolsTitleCS: string;
  outcomeLabel: string;
  collaborationLabel: string;
  headlineStats: { value: string; label: string }[];
  highlightsTitle: string;
}

export const ui: Record<Locale, UiDict> = {
  ko: {
    nav: { home: "Home", work: "Work", approach: "Approach", experience: "Experience", contact: "Contact" },
    langLabel: "EN",
    resumeButton: "이력서",
    connectButton: "연락하기",
    heroKicker: "PEOPLE / PROCESS / PLATFORMS / GLOBAL LAUNCHES",
    heroHeadline: "다른 시장의 복잡함을,\n반복 가능한 하나의 프로세스로.",
    heroSubtext:
      "글로벌 디지털 프로덕트를 위한 운영 체계를 설계합니다. 사람, 프로세스, 기술을 하나로 맞춰 복잡함을 일관되고 확장 가능한 론칭으로 바꿉니다.",
    heroAsideTitle: "다른 시장, 다른 요구사항. 하나의 명확한 실행.",
    heroAsideLines: ["글로벌 관점", "실질적인 실행력", "지속되는 임팩트"],
    handwrittenNote: "더 열린 세상을 위한 더 나은 서비스.",
    languagesLabel: "언어",
    approachKicker: "THE LAUNCH OPERATING SYSTEM",
    approachTitle: "반복 가능한 글로벌 론칭 프로세스",
    approachSubtitle: "국가·이해관계자가 달라져도 같은 5단계로 리스크를 줄이고 품질을 지킵니다.",
    approachOutro: "다른 시장, 같은 원칙 — 더 나은 내일로.",
    workKicker: "REAL PROJECTS. REAL SCALE.",
    workTitle: "Selected Work",
    workSubtitle: "이력서와 포트폴리오에 담긴 프로젝트 전부를, 문제 정의부터 결과까지 케이스 스터디로 정리했습니다.",
    viewAllWork: "전체 프로젝트",
    skillsTitle: "Skills & Tools",
    domainLabel: "Domain",
    toolsLabel: "Tools",
    educationLabel: "Education",
    experienceTitle: "Experience",
    experienceSubtitle: "실시간으로 업데이트되는 전체 경력 타임라인입니다.",
    experienceViewAll: "전체 경력 보기",
    experiencePageIntro:
      "2019년부터 현재까지, 게임·엔터테인먼트부터 글로벌 제조사 커머스 플랫폼까지 이어진 프로젝트 매니지먼트 이력입니다.",
    educationSectionLabel: "Education",
    contactTitle: "함께 일해보고 싶으신가요?",
    contactSubtitle: "새로운 프로젝트, 글로벌 확산, 신규 서비스 런칭 어디든 편하게 연락 주세요.",
    footerTagline: "GLOBAL THINKING. HUMAN-CENTERED PROGRESS.",
    footerQuote: "복잡함은 주어진 조건이지만, 더 나은 내일은 선택할 수 있습니다.",
    roleLabel: "Role",
    companyLabel: "Company",
    periodLabel: "Period",
    backToWork: "Selected Work",
    nextProject: "Next project",
    challengeTitle: "Challenge",
    approachStepsTitle: "Approach",
    artifactsTitle: "Artifacts",
    resultsTitle: "Results",
    collaborationTitle: "Collaboration",
    toolsTitleCS: "Tools",
    outcomeLabel: "성과",
    collaborationLabel: "협업",
    headlineStats: [
      { value: "6+", label: "년 글로벌 PM 경력" },
      { value: "80+", label: "개국 플랫폼 확산 운영" },
      { value: "9", label: "개 케이스 스터디" },
    ],
    highlightsTitle: "Highlights",
  },
  en: {
    nav: { home: "Home", work: "Work", approach: "Approach", experience: "Experience", contact: "Contact" },
    langLabel: "한국어",
    resumeButton: "Resume",
    connectButton: "Let's Connect",
    heroKicker: "PEOPLE / PROCESS / PLATFORMS / GLOBAL LAUNCHES",
    heroHeadline: "From market-by-market complexity\nto one repeatable launch.",
    heroSubtext:
      "I design operating systems for global digital products — aligning people, process, and technology to turn complexity into consistent, scalable launches.",
    heroAsideTitle: "Different markets. One clear way forward.",
    heroAsideLines: ["Global perspective.", "Practical execution.", "Lasting impact."],
    handwrittenNote: "Better products for a more open world.",
    languagesLabel: "Languages",
    approachKicker: "THE LAUNCH OPERATING SYSTEM",
    approachTitle: "A repeatable process for global launches",
    approachSubtitle: "The same five steps, run again for every market and every set of stakeholders.",
    approachOutro: "Different markets. Same principles. A brighter tomorrow.",
    workKicker: "REAL PROJECTS. REAL SCALE.",
    workTitle: "Selected Work",
    workSubtitle: "Every project from my resume and portfolio deck, written up as a case study from problem to result.",
    viewAllWork: "View all work",
    skillsTitle: "Skills & Tools",
    domainLabel: "Domain",
    toolsLabel: "Tools",
    educationLabel: "Education",
    experienceTitle: "Experience",
    experienceSubtitle: "The full career timeline, kept current.",
    experienceViewAll: "View full experience →",
    experiencePageIntro:
      "A project-management career from 2019 to today — spanning games and entertainment to global manufacturers' commerce platforms.",
    educationSectionLabel: "Education",
    contactTitle: "Let's build something together.",
    contactSubtitle: "New projects, global rollouts, or a new service to launch — reach out any time.",
    footerTagline: "GLOBAL THINKING. HUMAN-CENTERED PROGRESS.",
    footerQuote: "Complexity is a given. A brighter tomorrow is a choice.",
    roleLabel: "Role",
    companyLabel: "Company",
    periodLabel: "Period",
    backToWork: "Selected Work",
    nextProject: "Next project",
    challengeTitle: "Challenge",
    approachStepsTitle: "Approach",
    artifactsTitle: "Artifacts",
    resultsTitle: "Results",
    collaborationTitle: "Collaboration",
    toolsTitleCS: "Tools",
    outcomeLabel: "Outcome",
    collaborationLabel: "Collaboration",
    headlineStats: [
      { value: "6+", label: "years in global PM" },
      { value: "80+", label: "countries at rollout scale" },
      { value: "9", label: "case studies" },
    ],
    highlightsTitle: "Highlights",
  },
};

export function altPath(locale: Locale, pathWithoutLocale: string): string {
  return locale === "ko" ? `/en${pathWithoutLocale}` : pathWithoutLocale.replace(/^\/en/, "") || "/";
}
