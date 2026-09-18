import Link from "next/link";
import { profile } from "@/lib/data";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-tight">{profile.nameEn}</span>
          <span className="text-xs text-muted">{profile.nameKo}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted sm:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.resumeUrl}
          className="rounded-full border border-border px-4 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          download
        >
          Resume
        </a>
      </div>
    </header>
  );
}
