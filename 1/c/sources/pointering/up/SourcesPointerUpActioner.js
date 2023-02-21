import { ab } from "./ab";
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
    var ab = resolve(ab);

    this.runNoSwipeActions = () => {
        componentsServices.hideSlideSwipingHoverer();

        if (!sourcePointerProps.isSourceDownEventTarget) {
            lightboxCloser.closeLightbox();
        }

        sourcePointerProps.isPointering = false;
    };

    this.runActions = () => {
        if (sourcePointerProps.swipedX > 0) {
            ab.p()
        } else {
            ab.n()
        }

        componentsServices.hideSlideSwipingHoverer();

        elements.container.classList.remove(CURSOR_GRABBING_CLASS_NAME);

        sourcePointerProps.isPointering = false;
    };
}
