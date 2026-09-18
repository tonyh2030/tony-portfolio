import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-semibold">함께 일해보고 싶으신가요?</p>
          <p className="mt-2 max-w-md text-sm text-muted">
            새로운 프로젝트, 글로벌 확산, 신규 서비스 런칭 어디든 편하게 연락 주세요.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href={`mailto:${profile.email}`} className="font-medium hover:text-accent">
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent"
          >
            {profile.linkedinLabel}
          </a>
          <span className="text-muted">{profile.phone}</span>
        </div>
      </div>
      <div className="border-t border-border px-6 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.nameEn}. All rights reserved.
      </div>
    </footer>
  );
}
