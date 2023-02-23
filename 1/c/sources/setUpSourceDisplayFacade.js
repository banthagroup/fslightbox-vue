export function setUpSourceDisplayFacade(
    {
        core: { sourceDisplayFacade: self },
        props: { loadOnlyCurrentSource },
	sawu,
        stageIndexes
    }
) {
    self.displaySourcesWhichShouldBeDisplayed = () => {
        if (loadOnlyCurrentSource) {
            sawu[stageIndexes.current]();
            return;
        }

        for (let i in stageIndexes) {
		var j = stageIndexes[name];
            if (j !== undefined) {
                sawu[j]();
            }
        }
    };
}
