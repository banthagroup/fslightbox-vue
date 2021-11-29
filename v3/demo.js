import { createApp } from 'vue';
import Demo from '../base/demo/Demo.vue';
import '../base/src/scss/index.scss';
import '../base/demo/css/demo.css';

const app = createApp(Demo);
app.mount('#app');
