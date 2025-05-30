import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import zhCN from '../locales/zh-CN.json';
import type { AppSettingsConfig } from '../../../server';

let i18n: ReturnType<typeof createI18n> | undefined;

export async function getI18n() {
  if (!i18n) {
    let locale;
    if (!window.servicesApi.isConfigExist('settings')) {
      locale = navigator.language || 'en';
    } else {
      const settings = (await window.servicesApi.getJsonConfig(
        'settings'
      )) as AppSettingsConfig;
      locale = settings.language || 'en';
    }

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
