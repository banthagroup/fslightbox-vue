import { OPEN_CLASS_NAME } from "../../../constants/classes-names";

export function setUpLightboxOpenActioner(fsLightbox) {
    const {
        collections: { sourceMainWrappersTransformers },
        core: {
            eventsDispatcher,
            lightboxOpenActioner: self,
            globalEventsController,
            scrollbarRecompensor,
            sourceDisplayFacade,
            stageManager,
            windowResizeActioner
        },
        stageIndexes
    } = fsLightbox;

    self.runInitializedLightboxActions = () => {
        stageManager.updateStageIndexes();

        sourceDisplayFacade.displayStageSourcesIfNotYet();

        document.documentElement.classList.add(OPEN_CLASS_NAME);

        scrollbarRecompensor.addRecompense();

        globalEventsController.attachListeners();

        windowResizeActioner.runActions();
        sourceMainWrappersTransformers[stageIndexes.current].zero();

        eventsDispatcher.dispatch('onOpen');
    };
}
