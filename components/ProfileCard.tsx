import type { Profile, Skills } from "@/lib/types";
import type { UiDict } from "@/lib/i18n";

export default function ProfileCard({
  profile,
  skills,
  dict,
}: {
  profile: Profile;
  skills: Skills;
  dict: UiDict;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-orange" />
        <p className="tracked text-xs font-semibold uppercase">{profile.brandName}</p>
      </div>
      <p className="mt-3 text-lg font-semibold leading-snug">{profile.title}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{profile.bio}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.domains.slice(0, 5).map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/80"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-5 border-t border-border pt-4">
        <p className="tracked text-[10px] uppercase text-muted">{dict.languagesLabel}</p>
        <p className="mt-1 text-sm">Korean | English</p>
      </div>
    </div>
  );
}
