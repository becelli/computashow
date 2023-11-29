import { useRouter } from "next/router";

import { SupportedLanguages, Translation, translations } from "~/i18n";

export function useTranslation(): Translation {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  return translations[(locale ?? defaultLocale ?? "pt") as SupportedLanguages];
}
