export function setUpLightboxUpdater(
    {
        componentsServices: { isLightboxRenderedManager },
        core: { lightboxUpdater: self, lightboxCloser, lightboxOpener, slideIndexChanger },
        data,
        stageIndexes
    }
) {
    self.handleTogglerUpdate = () => {
        if (isLightboxRenderedManager.get()) {
            lightboxCloser.closeLightbox();
        } else if (data.isInitialized) {
            lightboxOpener.openLightbox();
        } else {
            lightboxOpener.initializeAndOpenLightbox();
        }
    };

    self.runCurrentStageIndexUpdateActionsFor = (newSlideSourceIndex) => {
        if (newSlideSourceIndex === stageIndexes.current) {
            return;
        }

        (isLightboxRenderedManager.get()) ?
            slideIndexChanger.jumpTo(newSlideSourceIndex) :
            stageIndexes.current = newSlideSourceIndex;
    };
}
