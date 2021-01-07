import { createSources } from "../../sources/creating/createSources";
import { fillIndexedCollection } from "../../collections/fillIndexedCollection";
import { setUpCore } from "../../setUpCore";
import { SourceLoadHandler } from "../../sources/SourceLoadHandler";
import { SourceMainWrapperTransformer } from "../../transforms/SourceMainWrapperTransformer";

export function setUpLightboxOpener(fsLightbox) {
    const {
        componentsServices: { isLightboxOpenManager },
        core: { eventsDispatcher, lightboxOpener: self, lightboxOpenActioner },
        data
    } = fsLightbox;

    self.openLightbox = () => {
        eventsDispatcher.dispatch('onShow');
        fillIndexedCollection(fsLightbox, 'sourceLoadHandlers', SourceLoadHandler);
        isLightboxOpenManager.set(true, lightboxOpenActioner.runInitializedLightboxActions);
    };

    self.initializeAndOpenLightbox = () => {
        data.isInitialized = true;

        fillIndexedCollection(fsLightbox, 'sourceLoadHandlers', SourceLoadHandler);
        fillIndexedCollection(fsLightbox, 'sourceMainWrapperTransformers', SourceMainWrapperTransformer);

        setUpCore(fsLightbox);

        eventsDispatcher.dispatch('onInit');

        isLightboxOpenManager.set(true, () => {
            lightboxOpenActioner.runInitializedLightboxActions();
            createSources(fsLightbox);
        });
    }
}
