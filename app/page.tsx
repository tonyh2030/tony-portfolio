import Link from "next/link";
import { caseStudies, experience, profile, skills } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

const headlineStats = [
  { value: "6+", label: "년 글로벌 PM 경력" },
  { value: "80+", label: "개국 플랫폼 확산 운영" },
  { value: "6", label: "개 조직 · 게임/커머스/제조 산업" },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 sm:pt-28">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {profile.title}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {profile.nameKo}
          <span className="ml-3 text-2xl text-muted sm:text-3xl">{profile.nameEn}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.resumeUrl}
            download
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
          >
            이력서 다운로드
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 border-t border-border pt-10 sm:grid-cols-3">
          {headlineStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold tracking-tight text-accent">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <ul className="space-y-3">
          {profile.summary.map((line) => (
            <li key={line} className="flex gap-3 text-[15px] leading-relaxed text-foreground/90">
              <span className="mt-1 text-accent">✓</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="work" className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-2 text-sm text-muted">
              대표 프로젝트 5건을 문제 정의부터 결과까지 케이스 스터디로 정리했습니다.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {caseStudies.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Skills & Tools</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-muted">Domain</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.domains.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1.5 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-muted">Tools</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.tools.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1.5 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
          <p className="text-sm font-medium text-muted">Education</p>
          <p className="mt-2 font-medium">{profile.education.school}</p>
          <p className="text-sm text-muted">{profile.education.major}</p>
          <p className="mt-2 text-sm text-muted">
            {profile.education.honors} · {profile.education.certificate}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <Link href="/experience" className="text-sm font-medium text-accent hover:underline">
            전체 경력 보기 →
          </Link>
        </div>
        <ul className="mt-8 space-y-6">
          {experience.slice(0, 3).map((stint) => (
            <li key={`${stint.company}-${stint.period}`} className="flex flex-col gap-1 border-b border-border pb-6 sm:flex-row sm:justify-between">
              <div>
                <p className="font-semibold">
                  {stint.company}
                  {stint.companyNote ? (
                    <span className="ml-2 text-sm font-normal text-muted">{stint.companyNote}</span>
                  ) : null}
                </p>
                <p className="mt-1 text-sm text-muted">{stint.team}</p>
              </div>
              <p className="text-sm text-muted sm:text-right">{stint.period}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
