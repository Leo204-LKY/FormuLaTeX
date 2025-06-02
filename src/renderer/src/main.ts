import { createApp } from 'vue';
import 'katex/dist/katex.min.css';
import './styles/index.pcss';
import App from './App.vue';
import { getI18n } from './utils/locales';

async function bootstrap() {
  const i18n = await getI18n();
  document.title = (i18n.global as import('vue-i18n').Composer).t('appTitle');

  createApp(App).use(i18n).mount('#app');
}

bootstrap();
