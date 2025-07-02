import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import App from './App.vue'
import singleSpaVue from 'single-spa-vue'
import singleSpaCss from 'single-spa-css'
import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { createVuetify } from 'vuetify'
import { persistModuleStore } from '@shared/utility'


const vuetify = createVuetify({})
const pinia = createPinia()

const getCssUrls = async () => {
  if (import.meta.env.DEV) {
    return [];
  }
  const manifest = await fetch('http://localhost:4101/.vite/manifest.json').then(r => r.json());
  const entry = Object.values(manifest).find(entry => Array.isArray(entry.css) && entry.css.length > 0);
  if (!entry) throw new Error('Css files are not found in manifest.json');
  return entry.css.map(cssPath => 'http://localhost:4101/' + cssPath);
};

const cssUrls = await getCssUrls();
const cssLifecycles = singleSpaCss({
  cssUrls,
})

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      const { name, basePath } = this;
      return h(App, {
        name: name,
        basePath: basePath,
      })
    }
  },
  handleInstance: (app, props) => {
    const routerInstance = router(props.basePath)
    app.use(routerInstance)
    app.use(pinia)
    app.use(vuetify)
  }
})

if (import.meta.env.MODE === 'development') {
  const app = createApp(App)
  const routerInstance = router()
  app.use(routerInstance)
  app.use(pinia)
  app.use(vuetify)
  app.mount('#app')
}

persistModuleStore(pinia, "monthly");

export const bootstrap = vueLifecycles.bootstrap
export const mount = [cssLifecycles.mount, vueLifecycles.mount]
export const unmount = [cssLifecycles.unmount, vueLifecycles.unmount]
