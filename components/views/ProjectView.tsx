import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/content";
import { ui, altPath, type Locale } from "@/lib/i18n";

export default function ProjectView({ locale, slug }: { locale: Locale; slug: string }) {
  const { profile, caseStudies } = getContent(locale);
  const dict = ui[locale];
  const index = caseStudies.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  const project = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const workHref = locale === "ko" ? "/#work" : "/en/#work";
  const nextHref = locale === "ko" ? `/projects/${next.slug}` : `/en/projects/${next.slug}`;

  return (
    <div>
      <Header
        locale={locale}
        altHref={altPath(locale, `/projects/${slug}`)}
        profile={profile}
        dict={dict}
      />
      <article>
        <header className="border-b border-border bg-surface">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <Link href={workHref} className="text-sm font-medium text-muted hover:text-orange">
              ← {dict.backToWork}
            </Link>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-orange-soft px-3 py-1 text-xs font-medium text-orange">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h1>
            <p className="mt-3 max-w-2xl text-lg text-muted">{project.subtitle}</p>

            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 text-sm sm:grid-cols-4">
              <div>
                <dt className="text-muted">{dict.companyLabel}</dt>
                <dd className="mt-1 font-medium">{project.company}</dd>
              </div>
              <div>
                <dt className="text-muted">{dict.periodLabel}</dt>
                <dd className="mt-1 font-medium">{project.period}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-muted">{dict.roleLabel}</dt>
                <dd className="mt-1 font-medium">{project.role}</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6 py-14">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="text-2xl font-semibold text-orange">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <Section title={dict.challengeTitle}>
            {project.challenge.map((p) => (
              <p key={p} className="leading-relaxed text-foreground/90">
                {p}
              </p>
            ))}
          </Section>

          <Section title={dict.approachStepsTitle}>
            <ol className="space-y-4">
              {project.approach.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-soft text-xs font-semibold text-orange">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed text-foreground/90">{step}</span>
                </li>
              ))}
            </ol>
          </Section>

          {project.images.length > 0 ? (
            <Section title={dict.artifactsTitle}>
              <div className="space-y-8">
                {project.images.map((img) => (
                  <figure key={img.src}>
                    <div className="overflow-hidden rounded-2xl border border-border">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={1400}
                        height={900}
                        className="w-full"
                        sizes="(min-width: 768px) 768px, 100vw"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm text-muted">{img.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </Section>
          ) : null}

          <Section title={dict.resultsTitle}>
            <ul className="space-y-3">
              {project.results.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="mt-1 text-orange">✓</span>
                  <span className="leading-relaxed text-foreground/90">{r}</span>
                </li>
              ))}
            </ul>
          </Section>

          <div className="mt-14 grid grid-cols-1 gap-6 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-muted">{dict.collaborationTitle}</p>
              <p className="mt-2 text-sm leading-relaxed">{project.collaboration}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted">{dict.toolsTitleCS}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
            <span className="text-sm text-muted">{dict.nextProject}</span>
            <Link href={nextHref} className="text-lg font-semibold hover:text-orange">
              {next.title} →
            </Link>
          </div>
        </div>
      </article>
      <Footer profile={profile} dict={dict} />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}
