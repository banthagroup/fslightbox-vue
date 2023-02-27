import { gsw } from "../../scrollbar/gsw";
import { injectStylesIfNotInDom } from "../../styles/injectStylesIfNotInDom";

export function runLightboxMountedActions(o) {
    const {
        core: { lightboxOpener },
        data,
        props: { openOnMount }
    } = o;

    injectStylesIfNotInDom();
    data.scrollbarWidth = gsw();

    if (openOnMount) {
        o.i();
    }
}
