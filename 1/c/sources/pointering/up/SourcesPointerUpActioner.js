import { SourcesPointerUpActionerBucket } from "./SourcesPointerUpActionerBucket";
import { CURSOR_GRABBING_CLASS_NAME } from "../../../../cn/classes-names";

export function SourcesPointerUpActioner(
    {
        componentsServices,
        core: { lightboxCloser },
        elements,
        resolve,
        sourcePointerProps
    }
) {
    const slideSwipingUpActionsBucket = resolve(SourcesPointerUpActionerBucket);

    this.runNoSwipeActions = () => {
        componentsServices.hideSlideSwipingHoverer();

        if (!sourcePointerProps.isSourceDownEventTarget) {
            lightboxCloser.closeLightbox();
        }

        sourcePointerProps.isPointering = false;
    };

    this.runActions = () => {
        if (sourcePointerProps.swipedX > 0) {
            slideSwipingUpActionsBucket.runPositiveSwipedXActions();
        } else {
            slideSwipingUpActionsBucket.runNegativeSwipedXActions();
        }

        componentsServices.hideSlideSwipingHoverer();

        elements.container.classList.remove(CURSOR_GRABBING_CLASS_NAME);

        sourcePointerProps.isPointering = false;
    };
}
