import { getSourcesCount } from "./core/sources/getSourcesCount";
import { getInitialCurrentIndex } from "./core/stage/getInitialCurrentIndex";
import { setUpCore } from "./core/setUpCore";
import { getSourcesHoldersTransformersCollection } from "./core/collections/getSourcesHoldersTransformersCollection";

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

    this.componentsServices = {
        setSlideNumber: null,
        isFullscreenOpenManager: {},
        isSourceLoadedManagersCollection: [],
        setSourceComponentCollection: []
    };

    this.elements = {
        container: null,
        sourcesOutersWrapper: null,
        sources: [],
        sourcesOuters: [],
        sourcesInners: [],
        sourcesComponents: []
    };

    this.resolve = (dependency, params = []) => {
        params.unshift(this);
        return new dependency(...params);
    };

    this.collections = {
        sourcesOutersTransformers: getSourcesHoldersTransformersCollection(this),
        sourcesLoadsHandlers: [],
        // after source load its size adjuster will be stored in this array so it may be later resized
        sourcesStylers: [],
        // if lightbox is unmounted pending xhrs need to be aborted
        xhrs: []
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

    setUpCore(this);
}
