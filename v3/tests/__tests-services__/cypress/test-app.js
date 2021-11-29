import { createApp } from 'vue';
import TestComponents from "../../../../base/tests/__tests-services__/cypress/TestComponents.vue";

const app = createApp(TestComponents);
app.mount('#app');