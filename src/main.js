import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

const app = createApp(App);
app.use(router);

router.isReady().then(() => {
  const redirect = sessionStorage.redirect;
  if (redirect) {
    const url = new URL(redirect);
    const path = url.pathname + url.search + url.hash;
    if (path !== '/' && path !== '/?') {
      router.push(path).catch(() => {});
    }
    delete sessionStorage.redirect;
  }
});

app.mount('#app');