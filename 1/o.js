import { setUpLightboxOpener } from "./c/main-component/opening/setUpLightboxOpener";
import { setUpLightboxUpdater } from "./c/main-component/updating/setUpLightboxUpdater";

export function FsLightbox(props) {
    // we can cache props at lightbox create, because before opening lightbox props are never used
    // so there is no threat of destructuring props that is not set yet
    this.props = props;

    this.data = {
        isInitialized: false,
        isFullyRendered: false,
        maxSourceWidth: 0,
        maxSourceHeight: 0,
        scrollbarWidth: 0,
    };

    this.sourcePointerProps = {
        isPointering: false,
        downScreenX: null,
        isSourceDownEventTarget: false,
        swipedX: 0
    };

    /**
     * @property { Number } previous
     * @property { Number } current
     * @property { Number } next
     */
    this.stageIndexes = {
        current: 0
    };

    this.componentsServices = {
        isLightboxOpenManager: {},
        setSlideNumber: null,
        isFullscreenOpenManager: {},
        hideSourceLoaderCollection: [],
        updateSourceDirectWrapperCollection: [],
        showSlideSwipingHoverer: null,
        hideSlideSwipingHoverer: null
    };

    this.elements = {
        container: null,
        sourceWrappersContainer: null,
        sources: [],
        sourceMainWrappers: [],
        sourceAnimationWrappers: [],
        sourcesComponents: []
    };

    this.collections = {
        sourceMainWrapperTransformers: [], // set up during lightbox initialize
        sourceLoadHandlers: [], // after source load its size adjuster will be stored in this array so it may be later resized
        sourceSizers: [],
        xhrs: [] // if lightbox is unmounted pending xhrs need to be aborted
    };

    this.core = {
        classFacade: {},
        eventsDispatcher: {},
        globalEventsController: {},
        lightboxCloser: {},
        lightboxOpener: {},
        lightboxOpenActioner: {},
        lightboxUpdater: {},
        scrollbarRecompensor: {},
        slideChangeFacade: {},
        slideIndexChanger: {},
        sourcesPointerDown: {},
        sourceDisplayFacade: {},
        stageManager: {},
        windowResizeActioner: {}
    };
    this.fs = {};

    this.getQueuedAction = (action, time) => {
        const queue = [];

        return () => {
            queue.push(true);

            this.timeout(() => {
                queue.pop();

                if (!queue.length) {
                    action();
                }
            }, time);
        };
    };

    this.resolve = (dependency, params = []) => {
        params.unshift(this);
        return new dependency(...params);
    };

    /**
     * Prevents calling timeouted function on closed or unmounted lightbox.
     */
    this.timeout = (handler, timeout) => {
        setTimeout(() => {
            if (this.elements.container) {
                handler();
            }
        }, timeout);
    };

    // setting up dependencies required to initialize lightbox
    // rest of the core is set up at initialize, because lightbox gets props on first open not at mount
    setUpLightboxUpdater(this);
    setUpLightboxOpener(this);
}
