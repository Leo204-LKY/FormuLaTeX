import { createI18n } from 'vue-i18n';

// Dynamically import all locale JSON files
const localeModules = import.meta.glob('../locales/*.json', { eager: true });

const messages: Record<string, Record<string, string>> = {};
const availableLocales: { value: string; label: string }[] = [];

for (const path in localeModules) {
  const match = path.match(/\/([a-zA-Z-]+)\.json$/);
  if (match) {
    const locale = match[1];
    const localeData = (
      localeModules[path] as { default: Record<string, string> }
    ).default;
    messages[locale] = localeData;

    availableLocales.push({
      value: locale,
      label: localeData.language || locale,
    });
  }
}

export { messages, availableLocales };

let i18n: ReturnType<typeof createI18n> | undefined;

export async function getI18n() {
  if (!i18n) {
    const locale =
      ((await window.servicesApi.getAppSetting('language')) as string) ||
      navigator.language;

    i18n = createI18n({
      locale,
      fallbackLocale: 'en',
      messages,
    });
  }

  return i18n;
}
