import { CUSTOM_TYPE, IMAGE_TYPE, VIDEO_TYPE, YOUTUBE_TYPE } from "../../../constants/core-constants";

export function DetectedTypeActioner(fsLightbox) {
    const {
        componentsServices: { isLightboxOpenManager, updateSourceDirectWrapperCollection },
        elements: { sourcesComponents }
    } = fsLightbox;

    this.runActionsForSourceTypeAndIndex = (type, i) => {
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
            updateSourceDirectWrapperCollection[i]();
        }
    };
}
