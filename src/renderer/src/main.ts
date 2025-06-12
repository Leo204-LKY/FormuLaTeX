import { createApp } from 'vue';
import 'katex/dist/katex.min.css';
import './styles/index.pcss';
import App from './App.vue';
import VueTour from 'v3-tour';
import 'v3-tour/dist/vue-tour.css';
import { getI18n } from './utils/locales';

async function bootstrap() {
  const i18n = await getI18n();
  document.title = (i18n.global as import('vue-i18n').Composer).t('appTitle');

  createApp(App).use(i18n).use(VueTour).mount('#app');

  document.addEventListener('keydown', (e) => {
    // Prevent default behavior for Ctrl/Cmd + A
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
      const target = e.target as HTMLElement;
      const isInput =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        (target as HTMLElement).isContentEditable;
      if (!isInput) {
        e.preventDefault();
      }
    }
  });
}

bootstrap();
