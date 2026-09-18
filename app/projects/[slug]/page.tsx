import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, profile } from "@/lib/data";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${profile.nameEn}`,
    description: project.subtitle,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = caseStudies.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Link href="/#work" className="text-sm font-medium text-muted hover:text-accent">
            ← Selected Work
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted">{project.subtitle}</p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-muted">Company</dt>
              <dd className="mt-1 font-medium">{project.company}</dd>
            </div>
            <div>
              <dt className="text-muted">Period</dt>
              <dd className="mt-1 font-medium">{project.period}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-muted">Role</dt>
              <dd className="mt-1 font-medium">{project.role}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-14">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {project.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="text-2xl font-semibold text-accent">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <Section title="Challenge">
          {project.challenge.map((p) => (
            <p key={p} className="leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
        </Section>

        <Section title="Approach">
          <ol className="space-y-4">
            {project.approach.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent">
                  {i + 1}
                </span>
                <span className="leading-relaxed text-foreground/90">{step}</span>
              </li>
            ))}
          </ol>
        </Section>

        {project.images.length > 0 ? (
          <Section title="Artifacts">
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

        <Section title="Results">
          <ul className="space-y-3">
            {project.results.map((r) => (
              <li key={r} className="flex gap-3">
                <span className="mt-1 text-accent">✓</span>
                <span className="leading-relaxed text-foreground/90">{r}</span>
              </li>
            ))}
          </ul>
        </Section>

        <div className="mt-14 grid grid-cols-1 gap-6 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-muted">Collaboration</p>
            <p className="mt-2 text-sm leading-relaxed">{project.collaboration}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted">Tools</p>
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
          <span className="text-sm text-muted">Next project</span>
          <Link href={`/projects/${next.slug}`} className="text-lg font-semibold hover:text-accent">
            {next.title} →
          </Link>
        </div>
      </div>
    </article>
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
