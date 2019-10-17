import { getSourcesCount } from "./core/sources/getSourcesCount";
import { getInitialCurrentIndex } from "./core/stage/getInitialCurrentIndex";

export function FsLightbox(props) {
    this.props = props;

    this.data = {
        sourcesCount: getSourcesCount(this),
        isInitialized: false,
        maxSourceWidth: 0,
        maxSourceHeight: 0,
        scrollbarWidth: 0,
    };

    this.slideSwipingProps = {
        isSwiping: false,
        downClientX: null,
        isSourceDownEventTarget: false,
        swipedX: 0
    };

    this.stageIndexes = {
        previous: undefined,
        current: getInitialCurrentIndex(this),
        next: undefined
    };

    this.elements = {
        container: null,
        sourcesOutersWrapper: null,
        sources: [],
        sourcesOuters: [],
        sourcesInners: [],
        sourcesComponents: []
    };

    this.core = {
        classFacade: {},
        eventsDispatcher: {},
        fullscreenToggler: {},
        globalEventsController: {},
        lightboxCloser: {},
        lightboxOpener: {},
        lightboxOpenActioner: {},
        lightboxUpdater: {},
        scrollbarRecompensor: {},
        slideChangeFacade: {},
        slideIndexChanger: {},
        slideSwipingDown: {},
        sourceLoadActioner: {},
        stageManager: {},
        windowResizeActioner: {}
    };
}
