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
}

bootstrap();
