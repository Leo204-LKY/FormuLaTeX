import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import zhCN from '../locales/zh-CN.json';

let i18n: ReturnType<typeof createI18n> | undefined;

export async function getI18n() {
  if (!i18n) {
    const locale =
      ((await window.servicesApi.getAppSetting('language')) as string) ||
      navigator.language;

    i18n = createI18n({
      locale,
      fallbackLocale: 'en',
      messages: {
        en,
        'zh-CN': zhCN,
      },
    });
  }

  return i18n;
}
