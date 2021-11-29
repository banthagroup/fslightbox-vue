import { createApp } from "vue";
import { fsLightboxStore } from "../../../src/js/fsLightboxStore";

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

innerWidth = 1000;
innerHeight = 500;

export function renderComponentAndGetLightbox(Component) {
    const vm = createApp(Component);

    return {
        lightbox: fsLightboxStore[0],
        vm: vm
    };
}

export async function asyncRenderComponentAndGetLightbox(Component) {
    const vm = createApp(Component);

    return {
        lightbox: fsLightboxStore[0],
        vm: vm
    };
}
