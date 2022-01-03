import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap Styles
import 'bootstrap'; // Bootstrap JS
import '@/sass/global/styles.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

createApp(App).use(router).mount('#app');
