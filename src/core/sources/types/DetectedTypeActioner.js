import { CUSTOM_TYPE, IMAGE_TYPE, INVALID_TYPE, VIDEO_TYPE, YOUTUBE_TYPE } from "../../../constants/core-constants";
import { SourceLoadHandler } from "../SourceLoadHandler";

export function DetectedTypeActioner(fsLightbox) {
    const {
        collections: { sourcesLoadsHandlers },
        componentsServices: { isLightboxOpenManager, updateSourceInnerCollection },
        elements: { sourcesComponents },
        resolve
    } = fsLightbox;

    this.runActionsForSourceTypeAndIndex = (type, i) => {
        if (type !== INVALID_TYPE) {
            sourcesLoadsHandlers[i] = resolve(SourceLoadHandler, [i]);
        }

        let componentName;

        switch (type) {
            case IMAGE_TYPE:
                componentName = 'Imager';
                break;
            case VIDEO_TYPE:
                componentName = 'Videor';
                break;
            case YOUTUBE_TYPE:
                componentName = 'Youtuber';
                break;
            case CUSTOM_TYPE:
                componentName = 'Customer';
                break;
            default:
                componentName = 'Invalider';
                break;
        }

        sourcesComponents[i] = componentName;

        if (isLightboxOpenManager.get()) {
            updateSourceInnerCollection[i]();
        }
    };
}
