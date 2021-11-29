import Vue from 'vue';
import Demo from "../base/demo/Demo.vue";
import '../base/src/scss/index.scss';
import '../base/demo/css/demo.css';

new Vue({
    el: "#app",
    render: h => h(Demo)
});
