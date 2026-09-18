import type { Profile } from "@/lib/types";
import type { UiDict } from "@/lib/i18n";

export default function Footer({ profile, dict }: { profile: Profile; dict: UiDict }) {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-semibold">{dict.contactTitle}</p>
          <p className="mt-2 max-w-md text-sm text-muted">{dict.contactSubtitle}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href={`mailto:${profile.email}`} className="font-medium hover:text-orange">
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-orange"
          >
            {profile.linkedinLabel}
          </a>
          <span className="text-muted">{profile.phone}</span>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
              TH
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">{profile.brandName}</p>
              <p className="tracked text-[10px] uppercase text-muted">{dict.footerTagline}</p>
            </div>
          </div>
          <p className="max-w-md text-sm italic text-muted">&ldquo;{dict.footerQuote}&rdquo;</p>
          <p className="text-xs text-muted">© {new Date().getFullYear()} {profile.brandName}</p>
        </div>
      </div>
    </footer>
  );
}
