import { setUpLightboxUpdater } from "./core/main-component/updating/setUpLightboxUpdater";
import { setUpLightboxOpener } from "./core/main-component/opening/setUpLightboxOpener";

export function FsLightbox(props) {
    // we can cache props at lightbox create, because before opening lightbox props are never used
    // so there is no threat of destructuring props that is not set yet
    this.props = props;

    this.data = {
        sources: null, // sources are set up at initialize
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

    /**
     * @property { Number } previous
     * @property { Number } current
     * @property { Number } next
     */
    this.stageIndexes = {};

    this.componentsServices = {
        isLightboxRenderedManager: {},
        setSlideNumber: null,
        isFullscreenOpenManager: {},
        hideLoaderCollection: [],
        updateSourceInnerCollection: [],
        showSlideSwipingHoverer: null,
        hideSlideSwipingHoverer: null
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
        sourcesOutersTransformers: [], // set up during lightbox initialize
        sourcesLoadsHandlers: [], // after source load its size adjuster will be stored in this array so it may be later resized
        sourcesStylers: [],
        xhrs: [] // if lightbox is unmounted pending xhrs need to be aborted
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
        sourceDisplayFacade: {},
        stageManager: {},
        windowResizeActioner: {}
    };

    // setting up dependencies required to initialize lightbox
    // rest of the core is set up at initialize, because lightbox gets props on first open not at mount
    setUpLightboxUpdater(this);
    setUpLightboxOpener(this);
}
