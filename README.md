# Tony Han — Portfolio

한현식(Hyun Sik Han)의 Global Project Manager / UX Manager 포트폴리오 사이트입니다. Next.js(App Router) + TypeScript + Tailwind CSS로 제작되었고, 정적 사이트로 export되어 GitHub Pages, Vercel, Netlify 등 어디에나 배포할 수 있습니다.

## 구조

- `lib/data.ts` — 프로필, 경력(experience), 대표 프로젝트 케이스 스터디(caseStudies) 데이터. 콘텐츠를 바꿀 때는 이 파일을 수정합니다.
- `app/page.tsx` — 홈 (Hero, Selected Work, Skills, Experience 미리보기)
- `app/experience/page.tsx` — 전체 경력 타임라인
- `app/projects/[slug]/page.tsx` — 프로젝트별 케이스 스터디 상세 페이지
- `public/images/projects/` — 케이스 스터디에 사용된 실제 산출물 이미지
- `public/resume/` — 다운로드용 이력서 PDF

## 로컬 실행

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인합니다.

## 빌드 / 정적 배포

```bash
npm run build
```

`next.config.ts`에 `output: "export"`가 설정되어 있어 빌드 결과가 `out/` 디렉토리에 정적 HTML로 생성됩니다.

- **Vercel / Netlify**: 저장소를 연결하면 기본 설정(`npm run build`)만으로 자동 배포됩니다.
- **GitHub Pages(프로젝트 페이지, 예: `username.github.io/tony-portfolio`)로 배포하는 경우**: `next.config.ts`에 아래처럼 `basePath`를 추가해야 이미지·링크 경로가 깨지지 않습니다.

  ```ts
  const nextConfig: NextConfig = {
    output: "export",
    basePath: "/tony-portfolio",
    images: { unoptimized: true },
  };
  ```

  커스텀 도메인이나 `username.github.io` 루트 저장소로 배포한다면 `basePath`는 필요 없습니다.

## 콘텐츠 업데이트

새 프로젝트를 추가하려면 `lib/data.ts`의 `caseStudies` 배열에 항목을 추가하고, 필요한 이미지를 `public/images/projects/`에 넣은 뒤 경로를 연결하면 됩니다. 경력 이력은 `experience` 배열에서 회사·기간 단위(`ExperienceStint`)로 관리합니다.
