import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import * as bootstrap from 'bootstrap';
import './scss/main.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');
