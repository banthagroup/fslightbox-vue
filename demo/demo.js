import Vue from 'vue';
import Demo from "./Demo.vue";
import './css/demo.css';
import '../src/scss/index.scss'

new Vue({
    el: "#app",
    render: h => h(Demo)
});
