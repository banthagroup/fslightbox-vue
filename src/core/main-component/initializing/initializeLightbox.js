import { createSources } from "../../sources/creating/createSources";

export function initializeLightbox(fsLightbox) {
    const {
        core: { eventsDispatcher },
        data
    } = fsLightbox;


    data.isInitialized = true;
    createSources(fsLightbox);
    eventsDispatcher.dispatch('onInit');
}
