import { SlideSwipingUpActionerBucket } from "./SlideSwipingUpActionerBucket";
import { CURSOR_GRABBING_CLASS_NAME } from "../../../../constants/classes-names";

export function SlideSwipingUpActioner(
    {
        componentsServices: { isSlideSwipingHovererShownManager },
        core: { lightboxCloser },
        elements,
        resolve,
        slideSwipingProps
    }
) {
    const slideSwipingUpActionsBucket = resolve(SlideSwipingUpActionerBucket);

    this.runNoSwipeActions = () => {
        if (!slideSwipingProps.isSourceDownEventTarget) {
            lightboxCloser.closeLightbox();
        }

        slideSwipingProps.isSwiping = false;
    };

    this.runActions = () => {
        if (slideSwipingProps.swipedX > 0) {
            slideSwipingUpActionsBucket.runPositiveSwipedXActions();
        } else {
            slideSwipingUpActionsBucket.runNegativeSwipedXActions();
        }

        isSlideSwipingHovererShownManager.set(false);

        elements.container.classList.remove(CURSOR_GRABBING_CLASS_NAME);

        slideSwipingProps.isSwiping = false;
    };
}
