import type { Metadata } from "next";
import HomeView from "@/components/views/HomeView";
import { getContent } from "@/lib/content";

const { profile } = getContent("en");

export const metadata: Metadata = {
  title: `${profile.brandName} — ${profile.title}`,
  description: profile.tagline,
};

export default function Page() {
  return <HomeView locale="en" />;
}
