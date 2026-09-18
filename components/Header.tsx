import Link from "next/link";
import type { Profile } from "@/lib/types";
import type { Locale, UiDict } from "@/lib/i18n";

export default function Header({
  locale,
  altHref,
  profile,
  dict,
}: {
  locale: Locale;
  altHref: string;
  profile: Profile;
  dict: UiDict;
}) {
  const home = locale === "ko" ? "/" : "/en";
  const nav = [
    { href: `${home === "/" ? "" : home}/#work`, label: dict.nav.work },
    { href: `${home === "/" ? "" : home}/#approach`, label: dict.nav.approach },
    { href: locale === "ko" ? "/experience" : "/en/experience", label: dict.nav.experience },
    { href: `${home === "/" ? "" : home}/#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={home} className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
            TH
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">{profile.brandName}</span>
            <span className="tracked text-[10px] uppercase text-muted">{profile.title}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted lg:flex">
          <Link href={home} className="text-foreground">
            {dict.nav.home}
            <span className="ml-1.5 inline-block h-1 w-1 rounded-full bg-orange align-middle" />
          </Link>
          {nav.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={altHref}
            className="tracked text-xs font-medium text-muted transition-colors hover:text-foreground"
          >
            {dict.langLabel}
          </Link>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <a
            href={profile.resumeUrl}
            download
            className="hidden text-sm font-medium text-muted transition-colors hover:text-foreground sm:block"
          >
            {dict.resumeButton}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:px-4"
          >
            {dict.connectButton}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
