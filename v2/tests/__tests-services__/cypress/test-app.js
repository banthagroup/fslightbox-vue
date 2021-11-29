import Vue from 'vue';
import TestComponents from "../../../../base/tests/__tests-services__/cypress/TestComponents.vue";

new Vue({
    el: "#app",
    render: h => h(TestComponents)
});
