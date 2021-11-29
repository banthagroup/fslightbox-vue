import { removeFromElementClassIfContains } from "../../helpers/elements/removeFromElementClassIfContains";
import { TRANSFORM_TRANSITION_CLASS_NAME } from "../../constants/classes-names";

export function setUpWindowResizeActioner(
    {
        collections: { sourceMainWrapperTransformers, sourceSizers },
        core: { windowResizeActioner: self },
        data,
        elements: { sourceMainWrappers },
        props: { sources },
        stageIndexes
    }
) {
    self.runActions = () => {
        // decreasing max source dimensions for better UX
        (innerWidth < 992) ?
            data.maxSourceWidth = innerWidth :
            data.maxSourceWidth = 0.9 * innerWidth;
        data.maxSourceHeight = 0.9 * innerHeight;

        for (let i = 0; i < sources.length; i++) {
            removeFromElementClassIfContains(sourceMainWrappers[i], TRANSFORM_TRANSITION_CLASS_NAME);

            if (i !== stageIndexes.current) {
                sourceMainWrapperTransformers[i].negative();
            }

            /**
             * Invalid type doesn't have SourceSizer so need to check if it exists.
             * React deletes refs after removing element so even if SourceSizer exists there might be no source, e.g.
             * after reopening
             */
            if (sourceSizers[i]) {
                sourceSizers[i].adjustSize();
            }
        }
    };
}
