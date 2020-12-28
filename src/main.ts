import { createApp } from 'vue';
import fsmVue from './index.js';
const json = require('../output/5fc4431583db1b30eca2a0b0.json');

const app = createApp({});
app.use(fsmVue, json);
app.mount('#app');
