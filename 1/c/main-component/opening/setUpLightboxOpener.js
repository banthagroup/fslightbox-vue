import { createSources } from "../../sources/creating/createSources";
import { fillIndexedCollection } from "../../collections/fillIndexedCollection";
import { s } from "../../s";
import { SourceLoadHandler } from "../../sources/SourceLoadHandler";
import { SourceMainWrapperTransformer } from "../../transforms/SourceMainWrapperTransformer";

export function setUpLightboxOpener(fsLightbox) {
    const {
        componentsServices: { isLightboxOpenManager },
        core: { eventsDispatcher, lightboxOpener: self, lightboxOpenActioner },
        data
    } = fsLightbox;

    self.openLightbox = () => {
        fillIndexedCollection(fsLightbox, 'sourceLoadHandlers', SourceLoadHandler);
        eventsDispatcher.dispatch('onShow');
        isLightboxOpenManager.set(true, lightboxOpenActioner.runInitializedLightboxActions);
    };

    self.initializeAndOpenLightbox = () => {
        data.isInitialized = true;

        fillIndexedCollection(fsLightbox, 'sourceLoadHandlers', SourceLoadHandler);
        fillIndexedCollection(fsLightbox, 'sourceMainWrapperTransformers', SourceMainWrapperTransformer);

        s(fsLightbox);

        eventsDispatcher.dispatch('onInit');

        isLightboxOpenManager.set(true, () => {
            lightboxOpenActioner.runInitializedLightboxActions();
            createSources(fsLightbox);
        });
    }
}
