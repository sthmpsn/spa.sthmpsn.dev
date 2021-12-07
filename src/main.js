import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap'; // Bootstrap JS
import '@/sass/global/styles.scss';

createApp(App).use(router).mount('#app');
