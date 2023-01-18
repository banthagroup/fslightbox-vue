export function setUpSourceDisplayFacade(
    {
        core: { sourceDisplayFacade: self },
        componentsServices: { updateSourceDirectWrapperCollection },
        stageIndexes,
        props: { loadOnlyCurrentSource }
    }
) {
    self.displaySourcesWhichShouldBeDisplayed = () => {
        if (loadOnlyCurrentSource) {
            updateSourceDirectWrapperCollection[stageIndexes.current]();
            return;
        }

        for (let name in stageIndexes) {
            if (stageIndexes[name] !== undefined) {
                updateSourceDirectWrapperCollection[stageIndexes[name]]();
            }
        }
    };
}
