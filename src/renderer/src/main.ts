import { createApp } from 'vue';
import 'katex/dist/katex.min.css';
import './styles/index.pcss';
import App from './App.vue';
import { getI18n } from './utils/locales';

async function bootstrap() {
  const i18n = await getI18n();

  createApp(App).use(i18n).mount('#app');
}

bootstrap();
