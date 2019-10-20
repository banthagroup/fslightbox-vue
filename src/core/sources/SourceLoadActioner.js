import { SourceStyler } from "./SourceStyler";
import { FADE_IN_STRONG_CLASS_NAME, OPACITY_1_CLASS_NAME } from "../../constants/classes-names";

export function SourceLoadActioner(
    {
        componentsServices: { hideLoaderCollection },
        collections: { sourcesStylers },
        elements: { sourcesInners, sources },
        resolve
    }, i, defaultWidth, defaultHeight
) {
    this.runNormalLoadActions = () => {
        sources[i].classList.add(OPACITY_1_CLASS_NAME);
        sourcesInners[i].classList.add(FADE_IN_STRONG_CLASS_NAME);
        hideLoaderCollection[i]();
    };

    this.runInitialLoadActions = () => {
        this.runNormalLoadActions();
        const sourceStyler = resolve(SourceStyler, [i, defaultWidth, defaultHeight]);
        sourceStyler.styleSize();
        sourcesStylers[i] = sourceStyler;
    };
}
