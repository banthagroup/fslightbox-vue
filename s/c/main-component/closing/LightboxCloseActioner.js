import { FADE_OUT_STRONG_CLASS_NAME, OPEN_CLASS_NAME } from "../../../cn/classes-names";
import { ANIMATION_TIME } from "../../../cn/css-constants";

export function LightboxCloseActioner(
    {
        componentsServices: { isFullscreenOpenManager, isLightboxOpenManager },
        core: {
            eventsDispatcher,
            globalEventsController,
            scrollbarRecompensor
        },
        elements,
	fs,
        props,
        sourcePointerProps,
        timeout
    }
) {
    this.isLightboxFadingOut = false;

    this.runActions = () => {
        this.isLightboxFadingOut = true;

        elements.container.classList.add(FADE_OUT_STRONG_CLASS_NAME);

        globalEventsController.removeListeners();

        if (props.exitFullscreenOnClose && isFullscreenOpenManager.get()) {
            fs.exitFullscreen();
        }

        timeout(() => {
            this.isLightboxFadingOut = false;

            sourcePointerProps.isPointering = false;

            elements.container.classList.remove(FADE_OUT_STRONG_CLASS_NAME);

            document.documentElement.classList.remove(OPEN_CLASS_NAME);

            scrollbarRecompensor.removeRecompense();

            isLightboxOpenManager.set(false);

            eventsDispatcher.dispatch('onClose');
        }, ANIMATION_TIME - 30);
    };
}
