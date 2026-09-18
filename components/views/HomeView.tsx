import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";
import ApproachSection from "@/components/ApproachSection";
import ProjectCard from "@/components/ProjectCard";
import { getContent } from "@/lib/content";
import { ui, altPath, type Locale } from "@/lib/i18n";

export default function HomeView({ locale }: { locale: Locale }) {
  const { profile, skills, experience, caseStudies, approach } = getContent(locale);
  const dict = ui[locale];
  const experienceHref = locale === "ko" ? "/experience" : "/en/experience";

  return (
    <div>
      <Header locale={locale} altHref={altPath(locale, "/")} profile={profile} dict={dict} />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="tracked text-xs font-semibold uppercase text-orange">{dict.heroKicker}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl">
              {dict.heroHeadline.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{dict.heroSubtext}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.resumeUrl}
                download
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {dict.resumeButton}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-orange hover:text-orange"
              >
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-orange hover:text-orange"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {dict.headlineStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold tracking-tight text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <p className="tracked text-xs font-semibold uppercase text-muted">{dict.highlightsTitle}</p>
              <ul className="mt-4 space-y-3">
                {profile.summary.map((line) => (
                  <li key={line} className="flex gap-3 text-[15px] leading-relaxed text-foreground/90">
                    <span className="mt-1 text-orange">✓</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="tracked text-xs font-semibold uppercase text-muted">{dict.heroAsideTitle}</p>
              <ul className="mt-4 space-y-2">
                {dict.heroAsideLines.map((line) => (
                  <li key={line} className="text-sm text-foreground/80">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <ProfileCard profile={profile} skills={skills} dict={dict} />
          </div>
        </div>
      </section>

      <ApproachSection steps={approach} dict={dict} />

      <section id="work" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="tracked text-xs font-semibold uppercase text-orange">{dict.workKicker}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{dict.workTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">{dict.workSubtitle}</p>
          </div>
        </div>
        <div className="mt-8">
          {caseStudies.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} locale={locale} />
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">{dict.skillsTitle}</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p className="tracked text-xs uppercase text-muted">{dict.domainLabel}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.domains.map((item) => (
                <span key={item} className="rounded-full border border-border px-3 py-1.5 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="tracked text-xs uppercase text-muted">{dict.toolsLabel}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.tools.map((item) => (
                <span key={item} className="rounded-full border border-border px-3 py-1.5 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
          <p className="tracked text-xs uppercase text-muted">{dict.educationLabel}</p>
          <p className="mt-2 font-medium">{profile.education.school}</p>
          <p className="text-sm text-muted">{profile.education.major}</p>
          <p className="mt-2 text-sm text-muted">
            {profile.education.honors} · {profile.education.certificate}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{dict.experienceTitle}</h2>
            <p className="mt-2 text-sm text-muted">{dict.experienceSubtitle}</p>
          </div>
          <Link href={experienceHref} className="text-sm font-medium text-orange hover:underline">
            {dict.experienceViewAll}
          </Link>
        </div>
        <ul className="mt-8 space-y-6">
          {experience.slice(0, 3).map((stint) => (
            <li
              key={`${stint.company}-${stint.period}`}
              className="flex flex-col gap-1 border-b border-border pb-6 sm:flex-row sm:justify-between"
            >
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

      <Footer profile={profile} dict={dict} />
    </div>
  );
}
