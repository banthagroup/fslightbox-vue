import { SourceSizer } from "./SourceSizer";
import { FADE_IN_STRONG_CLASS_NAME, OPACITY_1_CLASS_NAME } from "../../cn/classes-names";

export function SourceLoadActioner(
    {
        collections: { sourceSizers },
        componentsServices: { hideSourceLoaderCollection },
        elements: { sources },
        resolve,
	saw
    }, i
) {
    this.runActions = (defaultWidth, defaultHeight) => {
        sources[i].classList.add(OPACITY_1_CLASS_NAME);
        saw[i].classList.add(FADE_IN_STRONG_CLASS_NAME);
        hideSourceLoaderCollection[i]();

        runNormalLoadActions(defaultWidth, defaultHeight);
        this.runActions = runNormalLoadActions;
    };

    /**
     * Normal load actions without initial actions are triggered only while using srcset.
     */
    function runNormalLoadActions(defaultWidth, defaultHeight) {
        sourceSizers[i] = resolve(SourceSizer, [i, defaultWidth, defaultHeight]);
        sourceSizers[i].adjustSize();
    }
}
