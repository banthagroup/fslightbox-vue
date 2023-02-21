import { getScrollbarWidth } from "../../scrollbar/getScrollbarWidth";
import { injectStylesIfNotInDom } from "../../styles/injectStylesIfNotInDom";

export function runLightboxMountedActions(o) {
    const {
        core: { lightboxOpener },
        data,
        props: { openOnMount }
    } = o;

    injectStylesIfNotInDom();
    data.scrollbarWidth = getScrollbarWidth(o);

    if (openOnMount) {
        o.i();
    }
}
