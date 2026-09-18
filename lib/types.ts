export interface Profile {
  nameKo: string;
  nameEn: string;
  brandName: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinLabel: string;
  resumeUrl: string;
  summary: string[];
  education: {
    school: string;
    major: string;
    honors: string;
    certificate: string;
  };
}

export interface Skills {
  domains: string[];
  tools: string[];
}

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

export interface ApproachStep {
  number: string;
  title: string;
  icon: "search" | "team" | "build" | "launch" | "chart";
  category: string;
  bullets: string[];
}

export interface Content {
  profile: Profile;
  skills: Skills;
  experience: ExperienceStint[];
  caseStudies: CaseStudy[];
  approach: ApproachStep[];
}
