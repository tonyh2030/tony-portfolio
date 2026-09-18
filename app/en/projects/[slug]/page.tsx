import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectView from "@/components/views/ProjectView";
import { getContent } from "@/lib/content";

const { profile, caseStudies } = getContent("en");

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
    title: `${project.title} — ${profile.brandName}`,
    description: project.subtitle,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!caseStudies.some((p) => p.slug === slug)) notFound();
  return <ProjectView locale="en" slug={slug} />;
}
