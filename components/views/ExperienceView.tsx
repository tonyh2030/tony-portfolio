import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/content";
import { ui, altPath, type Locale } from "@/lib/i18n";

export default function ExperienceView({ locale }: { locale: Locale }) {
  const { profile, experience } = getContent(locale);
  const dict = ui[locale];

  return (
    <div>
      <Header locale={locale} altHref={altPath(locale, "/experience")} profile={profile} dict={dict} />

      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="tracked text-xs font-semibold uppercase text-orange">{dict.experienceTitle}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">{dict.nav.experience}</h1>
        <p className="mt-3 text-muted">{dict.experiencePageIntro}</p>

        <div className="mt-12 space-y-16">
          {experience.map((stint) => (
            <section key={`${stint.company}-${stint.period}`}>
              <div className="flex flex-col gap-1 border-b border-border pb-4 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    {stint.company}
                    {stint.companyNote ? (
                      <span className="ml-2 text-base font-normal text-muted">{stint.companyNote}</span>
                    ) : null}
                  </h2>
                  <p className="mt-1 text-sm text-muted">{stint.team}</p>
                </div>
                <p className="whitespace-nowrap text-sm font-medium text-orange">{stint.period}</p>
              </div>

              <div className="mt-6 space-y-8">
                {stint.engagements.map((eng) => (
                  <div key={eng.title} className="rounded-2xl border border-border bg-surface p-6">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="font-semibold">{eng.title}</h3>
                      <p className="text-sm text-muted">{eng.period}</p>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {dict.roleLabel}: {eng.role}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {eng.tasks.map((task) => (
                        <li key={task} className="flex gap-2 text-[15px] leading-relaxed">
                          <span className="mt-1 text-orange">·</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>

                    {eng.outcome ? (
                      <p className="mt-4 rounded-lg bg-orange-soft px-4 py-3 text-sm font-medium text-orange">
                        {dict.outcomeLabel}: {eng.outcome}
                      </p>
                    ) : null}

                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted">
                      {eng.collaboration ? (
                        <span>
                          {dict.collaborationLabel}: {eng.collaboration}
                        </span>
                      ) : null}
                    </div>
                    {eng.tools ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {eng.tools.map((tool) => (
                          <span key={tool} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
                            {tool}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {eng.link ? (
                      <a
                        href={eng.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-sm font-medium text-orange hover:underline"
                      >
                        {eng.link.label} ↗
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-surface p-6">
          <p className="tracked text-xs uppercase text-muted">{dict.educationSectionLabel}</p>
          <p className="mt-2 font-medium">{profile.education.school}</p>
          <p className="text-sm text-muted">{profile.education.major}</p>
          <p className="mt-2 text-sm text-muted">
            {profile.education.honors} · {profile.education.certificate}
          </p>
        </div>
      </div>

      <Footer profile={profile} dict={dict} />
    </div>
  );
}
