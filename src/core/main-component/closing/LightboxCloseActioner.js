import { FADE_OUT_STRONG_CLASS_NAME, OPEN_CLASS_NAME } from "../../../constants/classes-names";
import { ANIMATION_TIME } from "../../../constants/css-constants";

export function LightboxCloseActioner(
    {
        componentsServices: { isFullscreenOpenManager, isLightboxOpenManager },
        core: {
            eventsDispatcher,
            fullscreenToggler,
            globalEventsController,
            scrollbarRecompensor
        },
        elements,
        props,
        slideSwipingProps,
        timeout
    }
) {
    this.isLightboxFadingOut = false;

    this.runActions = () => {
        this.isLightboxFadingOut = true;

        elements.container.classList.add(FADE_OUT_STRONG_CLASS_NAME);

        globalEventsController.removeListeners();

        if (props.exitFullscreenOnClose && isFullscreenOpenManager.get()) {
            fullscreenToggler.exitFullscreen();
        }

        timeout(() => {
            this.isLightboxFadingOut = false;

            slideSwipingProps.isSwiping = false;

            elements.container.classList.remove(FADE_OUT_STRONG_CLASS_NAME);

            document.documentElement.classList.remove(OPEN_CLASS_NAME);

            scrollbarRecompensor.removeRecompense();

            isLightboxOpenManager.set(false);

            eventsDispatcher.dispatch('onClose');
        }, ANIMATION_TIME - 30);
    };
}
