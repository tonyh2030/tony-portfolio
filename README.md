# Tony Han — Portfolio

한현식(Hyun Sik Han, brand name **Tony Han**)의 Global Project Manager / UX Manager 포트폴리오 사이트입니다. Next.js(App Router) + TypeScript + Tailwind CSS로 제작되었고, 한국어(`/`)와 영어(`/en`) 두 언어를 지원합니다. Vercel 배포를 기본으로 설계되었습니다.

## 구조

- `lib/types.ts` — 콘텐츠 타입 정의 (Profile, ExperienceStint, CaseStudy, ApproachStep 등)
- `lib/content/ko.ts`, `lib/content/en.ts` — 실제 콘텐츠(경력, 프로젝트, 소개 문구)의 한국어/영어 버전. **내용을 수정할 때는 이 두 파일을 함께 고칩니다.**
- `lib/i18n.ts` — 내비게이션, 버튼, 섹션 소제목 등 UI 문구의 언어별 사전
- `components/views/` — 실제 페이지 레이아웃(HomeView, ExperienceView, ProjectView) — 한국어/영어 라우트가 이 컴포넌트들을 공유합니다
- `app/page.tsx`, `app/experience/page.tsx`, `app/projects/[slug]/page.tsx` — 한국어 라우트
- `app/en/page.tsx`, `app/en/experience/page.tsx`, `app/en/projects/[slug]/page.tsx` — 영어 라우트
- `public/images/projects/` — 케이스 스터디에 사용된 실제 산출물 이미지
- `public/resume/` — 다운로드용 이력서 PDF

## 로컬 실행

```bash
npm install
npm run dev
```

http://localhost:3000 (한국어) / http://localhost:3000/en (영어) 에서 확인합니다.

## Vercel 배포

이 프로젝트는 표준 Next.js 앱(정적 export 아님)이라 Vercel에서 별도 설정 없이 바로 배포됩니다.

1. https://vercel.com/new 에서 `tonyh2030/tony-portfolio` 저장소를 Import
2. Framework Preset: Next.js (자동 감지), Build Command/Output 등 기본값 그대로 Deploy
3. 배포 완료 후 기본 주소는 `tony-portfolio.vercel.app` 형태로 발급됩니다.

**커스텀 도메인을 연결하려면** (예: `tonyhan.com`, `hyunsikhan.dev` 등 직접 구매한 도메인):
Vercel 프로젝트 → Settings → Domains 에서 도메인을 추가하고, 도메인 등록기관(가비아, Namecheap 등)의 DNS에 Vercel이 안내하는 A/CNAME 레코드를 추가하면 됩니다.

**CLI로 배포하려면:**

```bash
npx vercel login   # 이메일 인증 필요
npx vercel --prod
```

## 콘텐츠 업데이트

- 새 프로젝트를 추가하려면 `lib/content/ko.ts`와 `lib/content/en.ts`의 `caseStudies` 배열에 각각 항목을 추가하고, 필요한 이미지를 `public/images/projects/`에 넣은 뒤 경로를 연결합니다. 이미지가 없는 프로젝트는 `images: []`로 두면 홈 화면에서 자동으로 그라디언트 플레이스홀더가 표시됩니다.
- 경력 이력은 `experience` 배열에서 회사·기간 단위(`ExperienceStint`)로 관리합니다.
- 내비게이션 문구나 버튼 텍스트처럼 "콘텐츠가 아닌 UI 문구"는 `lib/i18n.ts`에서 관리합니다.
