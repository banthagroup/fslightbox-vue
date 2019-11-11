import Vue from "vue";

const app = document.createElement('div');
app.id = 'app';

new Vue({
    el: "#app",
    render: h => h(Demo)
});
