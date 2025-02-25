import{so}from"./c/so";
import { setUpLightboxUpdater } from "./c/main-component/updating/setUpLightboxUpdater";

export function o(props) {
    // we can cache props at lightbox create, because before opening lightbox props are never used
    // so there is no threat of destructuring props that is not set yet
    this.props = props;

    this.data = {
        isFullyRendered: false,
        maxSourceWidth: 0,
        maxSourceHeight: 0,
        scrollbarWidth: 0,
    };this.isl=[];

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
        showSlideSwipingHoverer: null,
        hideSlideSwipingHoverer: null
    };this.sawu=[];

    this.elements = {sources:[]};this.saw=[];this.sc=[];this.smw=[];

    this.collections = {
        sourceLoadHandlers: [], // after source load its size adjuster will be stored in this array so it may be later resized
        sourceSizers: [],
        xhrs: [] // if lightbox is unmounted pending xhrs need to be aborted
    };

    this.core = {
        eventsDispatcher: {},
        globalEventsController: {},
        lightboxCloser: {},
        lightboxUpdater: {},
        scrollbarRecompensor: {},
        slideChangeFacade: {},
        slideIndexChanger: {},
        sourcesPointerDown: {},
        windowResizeActioner: {}
    };this.ap={};this.fs={};this.st={};this.sws={};

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
    so(this);
}
