import { SourceSizer } from "./SourceSizer";
import { OPACITY_1_CLASS_NAME } from "../../cn/classes-names";

export function SourceLoadActioner(
    {
        collections: { sourceSizers },
        elements: { sources },
	isl,
        resolve,
	saw,
	sawu
    }, i
) {
    this.runActions = (defaultWidth, defaultHeight) => {
        isl[i]=true;sawu[i]();
	sources[i].classList.add(OPACITY_1_CLASS_NAME);
        saw[i].classList.add("fslightboxfis");

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
