import { LightboxUpdateActioner } from "./LightboxUpdateActioner";

export function setUpLightboxUpdater(o) {
    var {
        componentsServices: {
            isLightboxOpenManager
        },
        core: {
            lightboxCloser,
            lightboxUpdater: self
        },
        data,
        resolve
    } = o;

    const actioner = resolve(LightboxUpdateActioner);

    self.handleSlideProp = () => {
        // cannot destructure props in LightboxUpdater param, because this object is overwritten on props update
        const currentProps = o.props;

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
            o.o()
        } else {
            o.i()
        }
    };
}
