import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/types";

const placeholderStyles = ["bg-primary text-primary-foreground", "bg-orange-fill text-white"];

export default function ProjectCard({
  project,
  index,
  locale,
}: {
  project: CaseStudy;
  index: number;
  locale: "ko" | "en";
}) {
  const href = locale === "ko" ? `/projects/${project.slug}` : `/en/projects/${project.slug}`;
  const number = String(index + 1).padStart(2, "0");
  const thumb = project.images[0];

  return (
    <Link
      href={href}
      className="group flex flex-col gap-6 border-b border-border py-8 first:pt-0 last:border-b-0 sm:flex-row sm:items-center"
    >
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted">{number}</span>
          <span className="h-1 w-1 rounded-full bg-orange-fill" />
          <span className="tracked text-[11px] font-medium uppercase text-muted">{project.tags[0]}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight group-hover:text-orange sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{project.subtitle}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">
          {project.company} · {project.period}
        </p>
      </div>

      <div className="h-40 w-full shrink-0 overflow-hidden rounded-xl border border-border sm:h-32 sm:w-56">
        {thumb ? (
          <div className="relative h-full w-full bg-white p-2">
            <Image
              src={thumb.src}
              alt={thumb.alt}
              fill
              className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
              sizes="224px"
            />
          </div>
        ) : (
          <div
            className={`flex h-full w-full flex-col items-center justify-center gap-1 text-center ${placeholderStyles[index % placeholderStyles.length]}`}
          >
            <p className="text-3xl font-semibold tracking-tight">{project.stats[0]?.value}</p>
            <p className="tracked max-w-[80%] text-[10px] uppercase opacity-80">{project.stats[0]?.label}</p>
          </div>
        )}
      </div>
    </Link>
  );
}
