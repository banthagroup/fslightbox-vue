import Vue from 'vue';
import TestComponent from "./TestComponent.vue";
import '../../../src/scss/index.scss'

new Vue({
    el: "#app",
    render: h => h(TestComponent)
});
