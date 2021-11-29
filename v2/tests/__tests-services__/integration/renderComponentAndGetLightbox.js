import Vue from "vue";
import { fsLightboxStore } from "../../../../base/src/js/fsLightboxStore";

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

innerWidth = 1000;
innerHeight = 500;


export function renderComponentAndGetLightbox(Component) {
    const vm = new Vue({
        el: "#app",
        render: h => h(Component)
    });

    return {
        lightbox: fsLightboxStore[0],
        vm: vm
    };
}

export async function asyncRenderComponentAndGetLightbox(Component) {
    const vm = await new Vue({
        el: "#app",
        render: h => h(Component)
    });

    return {
        lightbox: fsLightboxStore[0],
        vm: vm
    };
}
