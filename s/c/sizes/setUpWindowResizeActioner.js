export function setUpWindowResizeActioner(
    {
        collections: { sourceSizers },
        core: { windowResizeActioner: self },
        data,
        elements: { sources },
	smw,
        stageIndexes
    }
) {
    self.runActions = () => {
        (innerWidth < 992) ?
            data.maxSourceWidth = innerWidth :
            data.maxSourceWidth = 0.9 * innerWidth;
        data.maxSourceHeight = 0.9 * innerHeight;

        for (let i = 0; i < sources.length; i++) {
	    smw[i].d();

            /**
             * Invalid type doesn't have SourceSizer so need to check if it exists.
             * Sources are created 'tick' after main elements so after reopening lightbox there might be no source with
             * created SourceSizer so there is also a need for checking if source exists.
             */
            if (sourceSizers[i] && sources[i]) {
                sourceSizers[i].adjustSize();
            }
        }

	var pi=stageIndexes.previous,ni=stageIndexes.next;
	if (pi !== undefined) {
		smw[pi].ne();
	}
	if (ni !== undefined) {
		smw[ni].p();
	}
    };
}
