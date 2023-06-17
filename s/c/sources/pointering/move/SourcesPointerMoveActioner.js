import { CURSOR_GRABBING_CLASS_NAME } from "../../../../cn/classes-names";

export function SourcesPointerMoveActioner(
    {
        componentsServices,
        elements,
	smw,
        sourcePointerProps,
        stageIndexes
    }
) {
    this.runActionsForEvent = (e) => {
        // we are showing InvisibleHover component in move event not in down event
        // due to IE problems with videos sources controlling
        componentsServices.showSlideSwipingHoverer();

        elements.container.classList.add(CURSOR_GRABBING_CLASS_NAME);

        sourcePointerProps.swipedX = e.screenX - sourcePointerProps.downScreenX;

        t(stageIndexes.current,"z");
        if (stageIndexes.previous !== undefined && sourcePointerProps.swipedX > 0) {
            t(stageIndexes.previous,"ne")
        } else if (stageIndexes.next !== undefined && sourcePointerProps.swipedX < 0) {
            t(stageIndexes.next,"p")
        }
    };

    function t (i,p) {
        smw[i].v(sourcePointerProps.swipedX)[p]();
    }
}
