import { SourceSizer } from "./SourceSizer";
import { FADE_IN_STRONG_CLASS_NAME, OPACITY_1_CLASS_NAME } from "../../constants/classes-names";

export function SourceLoadActioner(
    {
        componentsServices: { hideLoaderCollection },
        collections: { sourceSizers },
        elements: { sourceAnimationWrappers, sources },
        resolve
    }, i, defaultWidth, defaultHeight
) {
    this.runNormalLoadActions = () => {
        sources[i].classList.add(OPACITY_1_CLASS_NAME);
        sourceAnimationWrappers[i].classList.add(FADE_IN_STRONG_CLASS_NAME);
        hideLoaderCollection[i]();
        sourceSizers[i].adjustSize();
    };

    this.runInitialLoadActions = () => {
        sourceSizers[i] = resolve(SourceSizer, [i, defaultWidth, defaultHeight]);
        this.runNormalLoadActions();
    };
}
