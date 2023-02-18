import { LightboxUpdateActioner } from "./LightboxUpdateActioner";

export function setUpLightboxUpdater(fsLightbox) {
    const {
        componentsServices: {
            isLightboxOpenManager
        },
        core: {
            lightboxCloser,
            lightboxOpener,
            lightboxUpdater: self
        },
        data,
        resolve
    } = fsLightbox;

    const actioner = resolve(LightboxUpdateActioner);

    self.handleSlideProp = () => {
        // cannot destructure props in LightboxUpdater param, because this object is overwritten on props update
        const currentProps = fsLightbox.props;

        if (typeof currentProps.sourceIndex === 'number') {
            actioner.runCurrentStageIndexUpdateActionsFor(currentProps.sourceIndex);
        } else if (typeof currentProps.source === 'string') {
            actioner.runCurrentStageIndexUpdateActionsFor(currentProps.sources.indexOf(currentProps.source));
        } else if (typeof currentProps.slide === 'number') {
            actioner.runCurrentStageIndexUpdateActionsFor(currentProps.slide - 1);
        }
    };

    self.handleTogglerUpdate = () => {
        if (isLightboxOpenManager.get()) {
            lightboxCloser.closeLightbox();
        } else if (data.isInitialized) {
            lightboxOpener.openLightbox();
        } else {
            lightboxOpener.initializeAndOpenLightbox();
        }
    };
}
