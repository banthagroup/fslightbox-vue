import { injectStylesIfNotInDom } from "../../styles/injectStylesIfNotInDom";
import { getScrollbarWidth } from "../../scrollbar/getScrollbarWidth";

export function runLightboxMountedActions(
    {
        core: { lightboxOpenActioner: { runActions } },
        data,
        props: { openOnMount }
    }
) {
    injectStylesIfNotInDom();
    data.scrollbarWidth = getScrollbarWidth();

    if (openOnMount) {
        runActions();
    }
}
