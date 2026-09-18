import type { ApproachStep } from "@/lib/types";
import type { UiDict } from "@/lib/i18n";
import { Icon } from "./icons";

const circleStyle: Record<string, string> = {
  "01": "bg-sage-soft text-primary border-sage",
  "02": "bg-sage-soft text-primary border-sage",
  "03": "bg-surface text-foreground border-border",
  "04": "bg-orange-fill text-white border-orange-fill",
  "05": "bg-surface text-foreground border-border",
};

export default function ApproachSection({ steps, dict }: { steps: ApproachStep[]; dict: UiDict }) {
  return (
    <section id="approach" className="mx-auto max-w-6xl px-6 py-16">
      <p className="tracked text-xs font-semibold uppercase text-orange">{dict.approachKicker}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{dict.approachTitle}</h2>
      <p className="mt-3 max-w-2xl text-sm text-muted">{dict.approachSubtitle}</p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-5">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col">
            <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-0">
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border ${circleStyle[step.number]}`}
              >
                <Icon name={step.icon} className="h-6 w-6" />
              </span>
              <div className="sm:mt-3">
                <p className="text-xs text-muted">{step.number}</p>
                <p className="text-base font-semibold">{step.title}</p>
              </div>
            </div>
            <div className="mt-3 flex-1 rounded-xl border border-border bg-surface p-4">
              <p className="tracked text-[10px] font-medium uppercase text-muted">{step.category}</p>
              <ul className="mt-2 space-y-1.5">
                {step.bullets.map((b) => (
                  <li key={b} className="text-xs leading-relaxed text-foreground/80">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <p className="tracked mt-8 text-center text-xs uppercase text-muted">{dict.approachOutro}</p>
    </section>
  );
}
