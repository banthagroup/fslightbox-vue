import { CUSTOM_TYPE, IMAGE_TYPE, VIDEO_TYPE, YOUTUBE_TYPE } from "../../../cn/core-constants";import I from "../../../cm/I.vue";
import V from "../../../cm/V.vue";
import Y from "../../../cm/Y.vue";
import C from "../../../cm/C.vue";
import In from "../../../cm/In.vue";

export function DetectedTypeActioner({ componentsServices: { isLightboxOpenManager }, sawu, sc }) {

    this.runActionsForSourceTypeAndIndex = (type, i) => {
        var c;

        switch (type) {
            case IMAGE_TYPE:
                c = I;
                break;
            case VIDEO_TYPE:
                c = V;
                break;
            case YOUTUBE_TYPE:
                c = Y;
                break;
            case CUSTOM_TYPE:
                c = C;
                break;
            default:
                c = In
        }

        sc[i] = c;

        if (isLightboxOpenManager.get())
            sawu[i]()
    }
}
