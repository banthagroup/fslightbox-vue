import { CUSTOM_TYPE, IMAGE_TYPE, VIDEO_TYPE, YOUTUBE_TYPE } from "../../../cn/core-constants";

export function DetectedTypeActioner(fsLightbox) {
    const {
        componentsServices: { isLightboxOpenManager, updateSourceDirectWrapperCollection },
        elements: { sourcesComponents }
    } = fsLightbox;

    this.runActionsForSourceTypeAndIndex = (type, i) => {
        let componentName;

        switch (type) {
            case IMAGE_TYPE:
                componentName = 'I';
                break;
            case VIDEO_TYPE:
                componentName = 'V';
                break;
            case YOUTUBE_TYPE:
                componentName = 'Y';
                break;
            case CUSTOM_TYPE:
                componentName = 'C';
                break;
            default:
                componentName = 'In';
                break;
        }

        sourcesComponents[i] = componentName;

        if (isLightboxOpenManager.get()) {
            updateSourceDirectWrapperCollection[i]();
        }
    };
}
