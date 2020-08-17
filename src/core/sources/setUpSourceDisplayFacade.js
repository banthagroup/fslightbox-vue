export function setUpSourceDisplayFacade(
    {
        core: { sourceDisplayFacade: self },
        componentsServices: { updateSourceInnerCollection },
        stageIndexes,
        props: { loadOnlyCurrentSource }
    }
) {
    self.displayStageSourcesIfNotYet = () => {
        if (loadOnlyCurrentSource) {
            updateSourceInnerCollection[stageIndexes.current]();
            return;
        }

        for (let name in stageIndexes) {
            if (stageIndexes[name] !== undefined) {
                updateSourceInnerCollection[stageIndexes[name]]();
            }
        }
    };
}
