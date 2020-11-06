import Vue from 'vue';
import TestComponents from "./TestComponents.vue";
import '../../../src/scss/index.scss'

new Vue({
    el: "#app",
    render: h => h(TestComponents)
});
