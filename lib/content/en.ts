import type { ApproachStep, CaseStudy, ExperienceStint, Profile, Skills } from "@/lib/types";

export const profile: Profile = {
  nameKo: "한현식",
  nameEn: "Hyun Sik Han",
  brandName: "Tony Han",
  title: "Global Project Manager · UX Manager",
  tagline:
    "I'm a PM who takes global platforms and new services from 0 to 1 — and from 1 to N.",
  bio: "I've spent 6+ years leading global platform and product launches — from games to global manufacturers' commerce platforms — turning complex, multi-country, multi-stakeholder projects into repeatable process.",
  email: "hahysi2030@gmail.com",
  phone: "+82 10 4183 3803",
  linkedin: "https://www.linkedin.com/in/hahysi2030",
  linkedinLabel: "linkedin.com/in/hahysi2030",
  resumeUrl: "/resume/Han_Hyunsik_Resume_2026.pdf",
  summary: [
    "Led post-launch operational stability for a new in-house app by establishing service operating policy, CMS management standards, and an app release/version-management framework",
    "Redefined issue priority and a feature-by-feature release strategy under an 80% QA error rate, improving it to under 10% while still launching on schedule",
    "Managed global rollout programs for large-scale platforms — gathering multi-country requirements, running QA/UAT, handling live issues, and owning operational handoff",
  ],
  education: {
    school: "The Pennsylvania State University, University Park",
    major: "Security and Risk Analysis - Information and Cyber Security",
    honors: "Dean's List 2018 FA, 2019 SP, 2020 SP",
    certificate: "National Security Agency (NSA) Certificate",
  },
};

export const skills: Skills = {
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

export const experience: ExperienceStint[] = [
  {
    company: "Concentrix Korea",
    team: "CiX (Concentrix Interactive eXperience) · UI/UX Planning, Global Project Management",
    period: "Oct 2025 – Present",
    engagements: [
      {
        title: "LG Electronics — LG.com B2B Global Expansion Project",
        period: "Jan 2026 – Present",
        role: "UX Planning, Page Production Management",
        tasks: [
          "Led the creation of a UX standardization guide to establish common UI/UX standards across 15 LG.com country sites",
          "Resolved inconsistent UI/UX and operating practices across local entities by defining shared global standards for the B2B site expansion",
          "Led production of region-adapted UX standardization guides, using the global standard site as the baseline for previously inconsistent content structures",
          "Drove page production against the standardization guide, collaborating with development teams and running QA",
        ],
        outcome: "Completed rollout to 7 countries in Group 1; Group 2 (8 countries, 9 sites) in progress",
        collaboration: "LG Electronics B2B Channel Team / LG CNS LG.com Dev Team / CNX LG.com Production Team",
        tools: ["Confluence", "Jira", "AEM", "Figma"],
      },
      {
        title: "Hyundai Motor — Genesis.com Europe Global Rollout Project",
        period: "Oct 2025 – Dec 2025",
        role: "Italy Entity PMO, New Component Design & Production Management",
        tasks: [
          "Managed PMO for the Italy entity and led UX review/development of new design components across a 4-country rollout (France/Spain/Italy/Netherlands)",
          "Ran the site redesign program tied to Genesis's new vehicle line and business expansion across 4 flagship European entities",
          "As Italy PMO, gathered local requirements and coordinated rollout scope for that market while overseeing production and development",
          "Led UX review, design production, and development management for 6 new/improved design components outside the core rollout, and published QA reports",
        ],
        outcome:
          "Delivered 100% of Italy entity requirements on the live schedule with a full operational handoff; shipped and integrated 6 new design components",
        collaboration: "Hyundai Motor Genesis / Hyundai Autoever Overseas Sales Strategy Team / CiX Design Team",
      },
    ],
  },
  {
    company: "PTKOREA",
    team: "GXG (Global eXperience Group) · PM, Service Planning, PMO",
    period: "Aug 2023 – Oct 2025",
    engagements: [
      {
        title: "Samsung Electronics — Samsung.com US UX Redesign / Migration Project",
        period: "Feb 2025 – Sep 2025",
        role: "Project PMO",
        tasks: [
          "Gathered and aligned UX requirements between the US entity and HQ, managing issues and the overall project schedule",
          "Ran the US site's frontend/backend global migration in parallel with a full UX redesign, as part of Samsung.com's global UX overhaul",
          "Scoped the redesign, then managed phased go-live schedules and US-side production deliverables by business unit",
          "Coordinated with the global migration/dev PMO on impact analysis while migration and redesign proceeded simultaneously",
        ],
        outcome: "Delivered the redesigned US site on the global launch schedule with US UX requirements fully reflected",
        collaboration:
          "Samsung Electronics D2C UX Group, Dev Group / Samsung US UX, Dev & Product Teams / EY Samsung.com Operations PMO",
        tools: ["Confluence", "Jira", "AEM", "Figma"],
      },
      {
        title: "PTKOREA In-House App Service Development (PRODY)",
        period: "Aug 2023 – Jan 2025",
        role: "Service Planning, PM",
        tasks: [
          "Led the new in-house app (Prody) and CMS end-to-end — planning, development, design, launch, and operational handoff",
          "Consolidated company culture features into a single app to fix accessibility and usability problems caused by community, training, and event content being scattered across platforms",
          "Gathered functional requirements through direct interviews with HR development, recruiting, PR, IT, and finance teams",
          "Designed new app features (community, calendar, live streaming, events, etc.), the CMS site, and the full service policy",
          "Managed the entire build — working with an overseas dev partner and infra vendor, reviewing internal security requirements, through app-market release",
          "Set up release and version management by publishing to the App Store, Play Store, and MS App Center simultaneously",
          "Partnered with the PR team on a launch event operating plan and handed the service off to the ops team",
        ],
        outcome: "Improved QA error rate from 80% to under 10% via a phased, feature-by-feature release strategy, launching on schedule",
        collaboration:
          "Cheil Worldwide India EC (Experience Commerce) Dev Team / Hostway Infra Team / GXG Design Team / IT / Talent Development / HR / PR / Finance",
        tools: ["Confluence", "Jira", "Figma", "Apple App Store Connect", "Google Play Console", "MS App Center"],
      },
      {
        title: "Samsung Electronics — Samsung.com Shop App UX Improvement Project",
        period: "Jan 2024 – Mar 2024",
        role: "Service Planning, PM",
        tasks: [
          "Planned a FAB (Floating Action Button) for the Galaxy flagship Unpack promotion, contributing to a 30% increase in user acquisition",
          "Analyzed lessons learned from the 2023 Unpack promotion and identified that high traffic combined with too few in-app promotion entry points was driving user drop-off",
          "Proposed and planned a new FAB giving shortcut access from the home screen to live streaming, pre-order, and event pages",
          "Authored wireframes and UI guides against advertiser requirements, and managed the design GUI guide",
        ],
        outcome: "Shipped the FAB feature in the Samsung Shop App, contributing to a 30% lift in Unpack 2024 promotion acquisition",
        collaboration: "Samsung Electronics D2C UX Group",
        tools: ["Figma"],
      },
    ],
  },
  {
    company: "NCSOFT",
    team: "UX Center · Project Manager",
    period: "Feb 2023 – Jul 2023",
    engagements: [
      {
        title: "Aion2 · B&S Neo Classic Game Development Project",
        period: "Feb 2023 – Jul 2023",
        role: "Project Manager",
        tasks: [
          "Owned communication between UX Center and dev studios, establishing workflows and managing internal project issues",
          "Resolved communication and issue-tracking gaps left by a newly formed UX Center org and PM team with no established process",
          "Participated in process design led by the PM team, managing UX/UI dev issues per project and cross-team communication",
        ],
        outcome:
          "Established a working issue-management process across BX, UX, and art direction within UX Center, plus external dev studios, enabling smoother communication",
        collaboration: "Aion2 Dev Studio / B&S Neo Dev Studio / UX Center BX & UX Studios",
        tools: ["Redmine-based internal platform", "Perforce", "Confluence", "Jira", "Figma"],
      },
    ],
  },
  {
    company: "NPIXEL",
    team: "Sound Team · Project Manager",
    period: "Sep 2022 – Jan 2023",
    engagements: [
      {
        title: "GranSaga · Chrono Odyssey · Metaverse/NFT Live Ops & Development",
        period: "Sep 2022 – Jan 2023",
        role: "Project Manager",
        tasks: [
          "Improved resolution rates for sound-related issues by reworking internal process and cross-team collaboration with dev",
          "Joined as a new PM to bring structure to sound-issue management and communication across the existing sound team",
          "Managed sound work and issues for the live title (GranSaga) in partnership with the live-ops team",
          "Managed sound direction and issue tracking for titles in development (Chrono Odyssey, Metaverse/NFT) on a separate track",
          "Owned communication with an overseas composer (Chris Velasco) — contract management, composing schedule, reference-doc translation, and issue tracking",
        ],
        outcome: "Fixed recurring merge-version control and missing-sound-resource issues across both live and in-development titles",
        collaboration: "GranSaga Live-Ops Team / Chrono Odyssey Dev Studio / Metaverse & NFT Dev Studio / Video Team / Art Team",
        tools: ["Perforce", "Confluence", "Jira", "Figma"],
      },
    ],
  },
  {
    company: "PTKOREA",
    team: "Global eXperience Group · PM, AE, Platform Planning",
    period: "Sep 2020 – Sep 2022",
    engagements: [
      {
        title: "Samsung Electronics — Samsung.com Online B2B Business Global Rollout",
        period: "May 2022 – Sep 2022",
        role: "PM",
        tasks: [
          "Managed production and rollout of B2B pages (Why Samsung SMB, Common EPP) across 25 Samsung.com country sites",
          "Ran the rollout across roughly 70 sites in 25 countries with a B2B presence, building landing pages for students and affiliate employees",
          "Partnered on design and content policy for the Why Samsung SMB (Small-Medium Business) and Common EPP (Enhanced Partner Program) page types",
          "Managed the global production center's schedule and phased rollout, running UAT/QA and handling live-launch issues",
        ],
        outcome:
          "Delivered 100% of live launches across ~70 sites in 25 countries for all 3 page types (Why Samsung SMB, Common EPP – Student/Corporate) on schedule, with full operational handoff",
        collaboration: "Samsung Electronics B2B Online Business Team / Cheil Worldwide Digital Platform Team / EY Samsung.com Operations PMO",
        tools: ["Confluence", "Jira", "AEM"],
      },
      {
        title: "Samsung Electronics — Samsung.com CX Improvement Project (Financial CX FRD Management)",
        period: "Dec 2021 – Apr 2022",
        role: "AE, Platform Planning",
        tasks: [
          "Managed UX improvements and prototype development for the consumer purchase-journey redesign track of the global Samsung.com CX program",
          "Managed prototype development for the Buying Page, Cart, and Checkout Page along the order and payment journey",
          "Authored and maintained the FRD (Functional Requirements Document) for the Buying Page",
        ],
        outcome: "Defined improvement requirements against advertiser needs and delivered the purchase-journey prototype on schedule",
        collaboration: "Samsung Electronics CX Team / Cheil Worldwide Omnichannel Team / Hanbom Studio (dev partner)",
        tools: ["Confluence"],
      },
      {
        title: "Samsung Electronics — Samsung.com B2B P6 Global Rollout Project",
        period: "Mar 2021 – Nov 2021",
        role: "PM",
        tasks: [
          "Managed production and rollout of all B2B pages for the IM, VD, and DA business units across roughly 80 country sites",
          "Owned communication to gather and reflect content and feature requirements across ~80 global entities' B2B sites",
          "Worked with the project PMO to reconcile differing business-unit and entity-level policies into a unified AEM production standard",
          "Managed the global production center's schedule and phased-rollout UAT/QA, responding to live-launch issues",
        ],
        outcome:
          "Delivered 100% of live launches for the core business units (IM, VD, DA) across ~80 country sites on schedule, with full operational handoff",
        collaboration: "Samsung Electronics D2C Team / Cheil Worldwide Digital Platform Team / EY Samsung.com Rollout PMO",
        tools: ["Confluence", "Jira", "AEM"],
      },
      {
        title: "Samsung Electronics — 2021 Galaxy S21 Unpack Consumer Education Video Project",
        period: "Dec 2020 – Feb 2021",
        role: "AE, Video Planning",
        tasks: [
          "Planned and managed production of consumer-education video content on product features for the Galaxy S21 Unpack promotion",
          "Wrote the storyboard for the assigned theme (Home Entertainment)",
        ],
        outcome: "Delivered on schedule with requirements reflected; published to Samsung's official S+ channel",
        collaboration: "GXG Video Production Partner",
        tools: ["MS Office"],
        link: { label: "Watch the video", href: "https://youtu.be/XVEYUf4ic-o" },
      },
      {
        title: "Samsung Electronics — Samsung.com B2C P6 Global Rollout Project",
        period: "Sep 2020 – Nov 2020",
        role: "PM",
        tasks: [
          "Managed production of roughly 6,000 Product Finder (PF) pages across ~80 Samsung.com B2C country sites",
          "Owned communication to gather and reflect product and feature requirements across ~80 global entities' PF pages",
          "Managed page-production decisions accounting for country-specific product types, categories, SKUs, and product-info edge cases",
          "Managed the global production center's schedule and AEM-based page production, running UAT/QA and handling live issues",
        ],
        outcome: "Delivered 100% of live launches with requirements reflected across ~80 country sites' PF pages, on schedule",
        collaboration: "Samsung Electronics D2C Team / Cheil Worldwide Digital Platform Team / EY Samsung.com Rollout PMO",
        tools: ["Confluence", "Jira", "AEM"],
      },
    ],
  },
  {
    company: "PTKOREA",
    team: "Global eXperience Group · Global AE, Platform Planning Intern",
    period: "Jul 2019 – Feb 2020",
    engagements: [
      {
        title: "Samsung Electronics US — Elite Platform Reward Service App & CMS Portal Development",
        period: "Jul 2019 – Feb 2020",
        role: "Global AE, Platform Planning",
        tasks: [
          "Planned an app service and CMS admin portal for a training/rewards program serving internal and partner-company employees",
          "Built for roughly 150,000 partner-company and HQ employees of Samsung's US entity",
          "Wrote storyboards and the FRD against app-service requirements and program policy for the US entity",
          "Coordinated with the dev partner and drafted the project WBS and API documentation, tracking build issues",
        ],
        outcome:
          "Service launch was ultimately shelved due to COVID-19, but full development and internal review were completed",
        collaboration: "Samsung Electronics US Reward Service & Dev Teams / Cheil Worldwide Omnichannel Team / Regen (dev partner)",
        tools: ["Confluence"],
      },
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "lg-com-global-ux",
    title: "LG.com B2B Global UX Standardization",
    subtitle: "Setting one UX standard across 15 country sites that had each grown their own way",
    company: "LG Electronics · Concentrix (CiX)",
    period: "Jan 2026 – Present",
    role: "UX Planning · Page Production Management",
    tags: ["Global UX Standardization", "B2B", "PM"],
    stats: [
      { value: "15 countries", label: "Sites in scope" },
      { value: "2 groups", label: "Phased rollout" },
      { value: "7 countries", label: "Group 1 complete" },
    ],
    challenge: [
      "LG.com had long been run independently by country and entity, so content structure and UI/UX standards had drifted apart from site to site.",
      "With a mandate to expand the B2B business globally, leaving that drift in place risked every entity building pages its own way again — undermining both quality and speed.",
    ],
    approach: [
      "Audited all 15 LG.com country sites to map out where content structure and UI/UX diverged, then scoped what a shared global standard actually needed to cover.",
      "Used the global standard site as the baseline and led production of a region-adapted UX standardization guide that accounted for local regulation, language, and business context.",
      "Carried the guide through to production — working with dev teams to apply the standard and using QA to verify compliance.",
      "Split entities into two rollout groups to spread risk, feeding lessons from Group 1 straight back into the Group 2 guide.",
    ],
    results: [
      "Completed the UX standardization guide rollout across 7 Group 1 countries.",
      "Group 2 (8 countries, 9 sites) is running on the same standard, with rollout speed and quality variance both down sharply.",
    ],
    collaboration: "LG Electronics B2B Channel Team / LG CNS LG.com Dev Team / CNX LG.com Production Team",
    tools: ["Confluence", "Jira", "AEM", "Figma"],
    images: [],
  },
  {
    slug: "genesis-europe-rollout",
    title: "Genesis.com Europe Rollout & Italy Entity PMO",
    subtitle: "Shipping 6 new components while coordinating local requirements across 4 countries",
    company: "Hyundai Motor Genesis · Concentrix (CiX)",
    period: "Oct 2025 – Dec 2025",
    role: "Italy Entity PMO · New Component Design & Production Management",
    tags: ["PMO", "Design Ops", "Multi-country Rollout"],
    stats: [
      { value: "4 countries", label: "France · Spain · Italy · Netherlands" },
      { value: "6", label: "New design components" },
      { value: "100%", label: "Italy requirements delivered" },
    ],
    challenge: [
      "Genesis needed to redesign its website across four flagship European entities at once, driven by new vehicle launches and business expansion.",
      "Local requirements differed by country, and as Italy's PMO I had to gather that market's requirements while simultaneously managing a slate of new design components for the whole program.",
    ],
    approach: [
      "Ran PMO for the Italy entity — gathering local requirements and negotiating rollout scope and priority.",
      "In parallel, led UX review and design production for 6 new/improved design components needed across the broader rollout.",
      "Tracked development against the finished designs and published my own QA reports to keep pre-launch risk under control.",
    ],
    results: [
      "Delivered 100% of Italy's requirements on the live schedule, with a complete operational handoff.",
      "Shipped all 6 new components into production — reusable assets other entities could draw on for their own rollouts.",
    ],
    collaboration: "Hyundai Motor Genesis / Hyundai Autoever Overseas Sales Strategy Team / CiX Design Team",
    tools: ["Figma", "Confluence", "Jira"],
    images: [],
  },
  {
    slug: "prody-inhouse-app",
    title: "PRODY — An In-House App & CMS, Planning Through Ops Handoff",
    subtitle: "Unifying company culture, scattered across platforms, into one app — end to end",
    company: "PTKOREA",
    period: "Aug 2023 – Jan 2025",
    role: "Service Planning · PM (End-to-End Lead)",
    tags: ["0→1 Product", "App/CMS", "PM", "End-to-End"],
    stats: [
      { value: "80% → <10%", label: "QA error rate improvement" },
      { value: "5 teams", label: "Interviewed for requirements" },
      { value: "3 markets", label: "App Store · Play · MS App Center, same-day" },
    ],
    challenge: [
      "Company community content, training materials, and event info were scattered across multiple platforms, hurting both accessibility and usability.",
      "To fix it, I led a new service — PRODY — that unified company-culture features into one app, end to end: planning, development, design, launch, and operational handoff.",
    ],
    approach: [
      "Interviewed HR development, recruiting, PR, IT, and finance teams directly to surface operational pain points and desired features.",
      "Designed the new app's feature set (community, calendar, live streaming, events, and more), the CMS site, and the full service policy.",
      "Managed the entire build with an overseas dev partner and infra vendor — from internal security review through app-market release.",
      "Set up release and version management by publishing simultaneously to the App Store, Play Store, and MS App Center.",
      "When QA hit an 80% error rate, changed course from a single big-bang release to a re-prioritized, feature-by-feature rollout instead.",
      "After launch, worked with the PR team on a launch-event operating plan and handed the service off cleanly to the ops team.",
    ],
    results: [
      "Improved the QA error rate from 80% to under 10% without slipping the launch date.",
      "The phased, feature-by-feature strategy protected quality while still hitting the committed launch window.",
      "Owned stabilization past launch too — writing the operating policy, CMS management standards, and version-control framework the ops team now runs on.",
    ],
    collaboration:
      "Cheil Worldwide India EC (Experience Commerce) Dev Team / Hostway Infra Team / GXG Design Team / IT / Talent Development / HR / PR / Finance",
    tools: ["Confluence", "Jira", "Figma", "Apple App Store Connect", "Google Play Console", "MS App Center"],
    images: [
      {
        src: "/images/projects/prody-user-flow.png",
        alt: "PRODY Booking Service User Flow",
        caption: "PRODY booking-service user flow — designed for both the end user and the CMS admin",
      },
      {
        src: "/images/projects/prody-cms-admin.png",
        alt: "PRODY CMS Admin Booking Status",
        caption: "The CMS admin screen as shipped — booking-status management and multilingual copy rules",
      },
    ],
  },
  {
    slug: "samsung-shop-app-fab",
    title: "Samsung Shop App — A FAB That Lifted Acquisition 30%",
    subtitle: "Turning last year's drop-off data into a new entry point",
    company: "Samsung Electronics · PTKOREA (GXG)",
    period: "Jan 2024 – Mar 2024",
    role: "Service Planning · PM",
    tags: ["UX Design", "Mobile App", "Growth"],
    stats: [
      { value: "+30%", label: "Unpack promotion acquisition" },
      { value: "1", label: "New FAB component" },
    ],
    challenge: [
      "A lessons-learned review of the 2023 Galaxy Unpack promotion showed that traffic during the flagship event was high, but a lack of in-app promotion entry points was driving users to drop off.",
      "Heading into 2024's Unpack, the same failure mode had to be designed out of the app experience.",
    ],
    approach: [
      "Used the prior promotion's drop-off data to propose and plan a new FAB (Floating Action Button) giving one-tap access from the home screen to live streaming, pre-orders, and event pages.",
      "Wrote the wireframes and UI guide myself against advertiser requirements, and owned the design GUI guide through to completion.",
      "Set the design direction for the feature and managed final design deliverables end to end.",
    ],
    results: [
      "Shipped the FAB feature inside the Samsung Shop App.",
      "Contributed to a 30% increase in overall acquisition for the 2024 Unpack promotion.",
    ],
    collaboration: "Samsung Electronics D2C UX Group",
    tools: ["Figma"],
    images: [
      {
        src: "/images/projects/shop-app-wireframe.png",
        alt: "Samsung Shop App FAB Wireframe",
        caption: "Wireframe and interaction spec — registration banner to confirmation popup flow",
      },
      {
        src: "/images/projects/shop-app-gui-spec.png",
        alt: "Samsung Shop App GUI Spec",
        caption: "GUI guide for the image component, small and large variants — the spec handed to engineering",
      },
    ],
  },
  {
    slug: "npixel-sound-pm",
    title: "NPIXEL Sound Team — Structuring Issue Management Across 3 Live Projects",
    subtitle: "Bringing process to a sound team running live ops and new development at once",
    company: "NPIXEL",
    period: "Sep 2022 – Jan 2023",
    role: "Project Manager",
    tags: ["Process Improvement", "Cross-team PM", "Game Ops"],
    stats: [
      { value: "3", label: "Concurrent projects" },
      { value: "1", label: "New issue dashboard" },
    ],
    challenge: [
      "I joined as a new PM for a sound team simultaneously supporting live ops on GranSaga and new development on Chrono Odyssey and Metaverse/NFT.",
      "Sound-issue management wasn't standardized across projects, which kept causing merge-version conflicts and missing sound resources.",
    ],
    approach: [
      "Managed GranSaga's live sound work and issues, building a working rhythm with the live-ops team.",
      "Ran Chrono Odyssey and Metaverse/NFT's sound development on a separate track, from creative direction through issue tracking.",
      "Owned communication with the overseas composer (Chris Velasco) — contracts, composing schedule, reference-doc translation, and issue tracking all through one channel.",
      "Built an issue dashboard per project so sound-issue priority and status were visible at a glance.",
    ],
    results: [
      "Fixed recurring merge-version-control and missing-sound-resource issues across both the live title and the projects in development.",
      "Stabilized issue and process collaboration with each project's PM, plus the art and video teams.",
    ],
    collaboration: "GranSaga Live-Ops Team / Chrono Odyssey Dev Studio / Metaverse & NFT Dev Studio / Video Team / Art Team",
    tools: ["Perforce", "Confluence", "Jira", "Figma"],
    images: [
      {
        src: "/images/projects/npixel-sound-dashboard.png",
        alt: "NPIXEL Sound Build Test Dashboard",
        caption: "Per-project sound build-test and issue-tracking dashboard",
      },
    ],
  },
  {
    slug: "online-b2b-global-rollout",
    title: "Samsung.com Online B2B — 70 Sites Across 25 Countries",
    subtitle: "Opening a dedicated landing experience for students and partner-company staff, everywhere at once",
    company: "Samsung Electronics · PTKOREA (GXG)",
    period: "May 2022 – Sep 2022",
    role: "PM",
    tags: ["Global Rollout", "B2B", "AEM"],
    stats: [
      { value: "25 countries", label: "Entities in scope" },
      { value: "~70", label: "Sites" },
      { value: "100%", label: "On-schedule live launches" },
    ],
    challenge: [
      "Samsung.com needed the Why Samsung SMB and Common EPP pages — built for students and partner-company employees — live across all 25 countries with a B2B business at the same time.",
      "Site structure and readiness varied by country, so managing roughly 70 sites' worth of rollout inside one shared schedule was the real problem.",
    ],
    approach: [
      "Coordinated design and content policy for the two page types — Why Samsung SMB (Small-Medium Business) and Common EPP (Enhanced Partner Program).",
      "Managed the global production center's schedule and phased rollout plan, verifying quality on each site via UAT/QA.",
      "Tracked pre- and post-launch issues per site and handed each one to the ops team as soon as it went live.",
    ],
    results: [
      "Delivered 100% of live launches across ~70 sites in 25 countries for all three page types (Why Samsung SMB, Common EPP – Student/Corporate), on schedule.",
      "Closed out operational handoff for every launched site, leaving no follow-on ops risk.",
    ],
    collaboration: "Samsung Electronics B2B Online Business Team / Cheil Worldwide Digital Platform Team / EY Samsung.com Operations PMO",
    tools: ["Confluence", "Jira", "AEM (Adobe Experience Manager)"],
    images: [
      {
        src: "/images/projects/samsung-scope-of-site.png",
        alt: "Online B2B Scope of Site",
        caption: "25-country rollout scope tracker — store setup, registration, and landing-page status by entity",
      },
      {
        src: "/images/projects/online-b2b-epp-live.png",
        alt: "Live EPP landing page",
        caption: "The employee purchase program (EPP) landing page, live",
      },
    ],
  },
  {
    slug: "samsung-cx-frd",
    title: "Samsung.com CX Improvement — Purchase-Journey Prototype & FRD",
    subtitle: "Redesigning Buying → Cart → Checkout, and writing it down so engineering could build it",
    company: "Samsung Electronics · PTKOREA (GXG)",
    period: "Dec 2021 – Apr 2022",
    role: "AE, Platform Planning",
    tags: ["CX", "Prototype", "FRD"],
    stats: [
      { value: "3 pages", label: "Buying · Cart · Checkout" },
      { value: "1", label: "FRD authored end to end" },
    ],
    challenge: [
      "Within Samsung.com's global CX improvement program, I owned the track redesigning the consumer purchase journey (Buying → Cart → Checkout).",
      "The redesign needed to be validated as a prototype, and the dev partner needed a requirements document precise enough to actually build against.",
    ],
    approach: [
      "Managed prototype development for the Buying Page, Cart, and Checkout Page along the order-and-payment journey.",
      "Authored and maintained the FRD (Functional Requirements Document) for the Buying Page myself — the most critical of the three.",
      "Managed the dev partner's schedule and deliverables against the page plans, checking requirements weren't dropped along the way.",
    ],
    results: [
      "Defined improvement requirements against advertiser needs and delivered the purchase-journey prototype on schedule.",
    ],
    collaboration: "Samsung Electronics CX Team / Cheil Worldwide Omnichannel Team / Hanbom Studio (dev partner)",
    tools: ["Confluence"],
    images: [
      {
        src: "/images/projects/samsung-checkout-prototype.png",
        alt: "Samsung.com Checkout Prototype",
        caption: "Buying/Checkout page prototype — the redesigned purchase journey",
      },
    ],
  },
  {
    slug: "samsung-b2b-p6-rollout",
    title: "Samsung.com B2B P6 — 80 Countries, 3 Business Units",
    subtitle: "Reconciling IM, VD, and DA's different policies into one AEM production standard",
    company: "Samsung Electronics · PTKOREA (GXG)",
    period: "Mar 2021 – Nov 2021",
    role: "PM",
    tags: ["Global Rollout at Scale", "AEM", "PMO"],
    stats: [
      { value: "~80 countries", label: "B2B sites redesigned" },
      { value: "3 business units", label: "IM · VD · DA" },
      { value: "100%", label: "Live-launch completion rate" },
    ],
    challenge: [
      "Following the B2C global rollout, I took on the equivalent large-scale redesign for every entity with a B2B business.",
      "Content and feature requirements differed by business unit (IM/VD/DA) across roughly 80 countries — reconciling that into one production standard was the core problem.",
    ],
    approach: [
      "Ran the communication channel to gather and reflect content and feature requirements across ~80 global entities' B2B sites.",
      "Worked with the project PMO to reconcile differing business-unit and entity-level policy into a single AEM production standard.",
      "Managed the global production center's schedule and phased-rollout UAT/QA, responding directly to live-launch issues.",
    ],
    results: [
      "Delivered 100% of live launches for the core business units (IM, VD, DA) across ~80 countries on schedule, with full operational handoff.",
    ],
    collaboration: "Samsung Electronics D2C Team / Cheil Worldwide Digital Platform Team / EY Samsung.com Rollout PMO",
    tools: ["Confluence", "Jira", "AEM (Adobe Experience Manager)"],
    images: [
      {
        src: "/images/projects/samsung-live-site.png",
        alt: "Samsung.com Live Site",
        caption: "Samsung.com's B2B business-unit pages, live after rollout",
      },
    ],
  },
  {
    slug: "samsung-b2c-p6-rollout",
    title: "Samsung.com B2C P6 — 80 Countries, 6,000+ Product Finder Pages",
    subtitle: "Managing 6,000+ pages under one framework when every country's SKUs were different",
    company: "Samsung Electronics · PTKOREA (GXG)",
    period: "Sep 2020 – Nov 2020",
    role: "PM",
    tags: ["Global Rollout at Scale", "AEM", "Product Finder"],
    stats: [
      { value: "~80 countries", label: "B2C sites" },
      { value: "6,000+", label: "Product Finder pages" },
      { value: "100%", label: "Live-launch completion rate" },
    ],
    challenge: [
      "Samsung.com's global B2C redesign required building roughly 6,000 Product Finder (PF) pages across ~80 entities.",
      "Product types, categories, and SKUs varied by country, so nearly every page carried its own country-specific exceptions.",
    ],
    approach: [
      "Owned communication to gather and reflect product and feature requirements across ~80 global entities' PF pages.",
      "Managed page-production calls against country-specific product type, category, SKU, and product-info edge cases.",
      "Managed the global production center's schedule and AEM-based page production, running UAT/QA alongside live-issue response.",
    ],
    results: [
      "Delivered 100% of live launches with requirements reflected across ~80 countries' PF pages, on schedule.",
    ],
    collaboration: "Samsung Electronics D2C Team / Cheil Worldwide Digital Platform Team / EY Samsung.com Rollout PMO",
    tools: ["Confluence", "Jira", "AEM"],
    images: [
      {
        src: "/images/projects/samsung-pf-tracker.png",
        alt: "P6 Global Rollout PF Mobile Tracker",
        caption: "Rollout tracker for the Product Finder program across ~80 countries (Confluence)",
      },
    ],
  },
];

export const approach: ApproachStep[] = [
  {
    number: "01",
    title: "Discover",
    icon: "search",
    category: "PEOPLE · INSIGHTS",
    bullets: ["Gather requirements by market/entity", "Diagnose current operating issues", "Stakeholder interviews"],
  },
  {
    number: "02",
    title: "Align",
    icon: "team",
    category: "STANDARDS",
    bullets: ["Set shared global UX standards", "Agree scope & policy", "Build guides / design systems"],
  },
  {
    number: "03",
    title: "Build",
    icon: "build",
    category: "EXECUTION",
    bullets: ["Design content/CMS operating model", "Define roles & permissions", "Manage dev & infra partners"],
  },
  {
    number: "04",
    title: "Launch",
    icon: "launch",
    category: "RELEASE RISK",
    bullets: ["Go-to-market readiness", "QA / UAT quality assurance", "Live-issue response"],
  },
  {
    number: "05",
    title: "Learn",
    icon: "chart",
    category: "OUTCOMES",
    bullets: ["Review outcomes & feedback", "Operational handoff", "Continuous improvement"],
  },
];
