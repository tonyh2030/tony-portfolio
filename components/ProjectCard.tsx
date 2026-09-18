import Link from "next/link";
import type { CaseStudy } from "@/lib/data";

export default function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-black/5"
    >
      <div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{project.subtitle}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-4 text-sm">
        {project.stats.slice(0, 2).map((stat) => (
          <div key={stat.label}>
            <p className="font-semibold text-accent">{stat.value}</p>
            <p className="text-xs text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted">
        {project.company} · {project.period}
      </p>
    </Link>
  );
}
