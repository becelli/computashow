import { useRouter } from "next/router";
import { SupportedLanguages, translations } from "~/i18n";

// create a hook to get the language from the i18n next.js useRouter
export const useTranslation = () => {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  return translations[(locale ?? defaultLocale ?? "pt") as SupportedLanguages];
}