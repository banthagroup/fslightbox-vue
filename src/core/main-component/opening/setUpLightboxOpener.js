import { createSources } from "../../sources/creating/createSources";
import { getInitialCurrentIndex } from "../../stage/getInitialCurrentIndex";
import { fillSourceMainWrapperTransformersCollection } from "../../collections/fillSourceMainWrapperTransformersCollection";
import { setUpCore } from "../../setUpCore";

export function setUpLightboxOpener(fsLightbox) {
    const {
        componentsServices: { isLightboxRenderedManager },
        core: { eventsDispatcher, lightboxOpener: self, lightboxOpenActioner },
        data,
        stageIndexes
    } = fsLightbox;

    self.openLightbox = () => {
        eventsDispatcher.dispatch('onShow');
        isLightboxRenderedManager.set(true, lightboxOpenActioner.runInitializedLightboxActions);
    };

    self.initializeAndOpenLightbox = () => {
        data.isInitialized = true;

        stageIndexes.current = getInitialCurrentIndex(fsLightbox);

        fillSourceMainWrapperTransformersCollection(fsLightbox);

        setUpCore(fsLightbox);

        eventsDispatcher.dispatch('onInit');

        isLightboxRenderedManager.set(true, () => {
            lightboxOpenActioner.runInitializedLightboxActions();
            createSources(fsLightbox);
        });
    }
}
