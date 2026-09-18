import * as ko from "./ko";
import * as en from "./en";
import type { Locale } from "@/lib/i18n";
import type { Content } from "@/lib/types";

export function getContent(locale: Locale): Content {
  return locale === "ko" ? ko : en;
}
