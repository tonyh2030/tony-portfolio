import type { Metadata } from "next";
import ExperienceView from "@/components/views/ExperienceView";
import { getContent } from "@/lib/content";

const { profile } = getContent("en");

export const metadata: Metadata = {
  title: `Experience — ${profile.brandName}`,
};

export default function Page() {
  return <ExperienceView locale="en" />;
}
