export function setUpLightboxUpdater(
    {
        componentsServices: { isLightboxOpenManager },
        core: { lightboxUpdater: self, lightboxCloser, lightboxOpener, slideIndexChanger },
        stageIndexes
    }
) {
    self.handleTogglerUpdate = () => {
        isLightboxOpenManager.get() ?
            lightboxCloser.closeLightbox() :
            lightboxOpener.openLightbox();
    };

    self.runCurrentStageIndexUpdateActionsFor = (newSlideSourceIndex) => {
        if (newSlideSourceIndex === stageIndexes.current) {
            return;
        }

        (isLightboxOpenManager.get()) ?
            slideIndexChanger.jumpTo(newSlideSourceIndex) :
            stageIndexes.current = newSlideSourceIndex;
    };
}
