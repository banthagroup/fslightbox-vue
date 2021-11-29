import { createApp } from "vue";
import { fsLightboxStore } from "../../../../base/src/js/fsLightboxStore";

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

innerWidth = 1000;
innerHeight = 500;

export function renderComponentAndGetLightbox(Component) {
    const vm = createApp(Component);
    vm.mount('#app');

    return {
        lightbox: fsLightboxStore[0],
        vm: vm
    };
}

export async function asyncRenderComponentAndGetLightbox(Component) {
    const vm = await createApp(Component);
    await vm.mount('#app');

    return {
        lightbox: fsLightboxStore[0],
        vm: vm
    };
}
