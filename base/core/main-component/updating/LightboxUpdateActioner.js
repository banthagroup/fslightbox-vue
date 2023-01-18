export function LightboxUpdateActioner(
    {
        componentsServices: {
            isLightboxOpenManager
        },
        core: {
            slideIndexChanger
        },
        stageIndexes
    }
) {
    this.runCurrentStageIndexUpdateActionsFor = (newSlideSourceIndex) => {
        if (newSlideSourceIndex === stageIndexes.current) {
            return;
        }

        (isLightboxOpenManager.get()) ?
            slideIndexChanger.jumpTo(newSlideSourceIndex) :
            stageIndexes.current = newSlideSourceIndex;
    };
}
