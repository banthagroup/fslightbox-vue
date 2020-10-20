<template>
    <div v-if="isRendered" ref="container"
         class="fslightbox-container fslightbox-full-dimension fslightbox-fade-in-strong">
        <Naver :fs-lightbox-index="this.fsLightboxIndex" />
        <SourceWrappersContainer :fs-lightbox-index="this.fsLightboxIndex" />
        <SlideButtons :fs-lightbox-index="this.fsLightboxIndex" />
        <SlideSwipingHoverer :fs-lightbox-index="this.fsLightboxIndex" />
    </div>
</template>

<script>
import "./core/styles/styles-injection/styles-injection";
import { fsLightboxStore } from "./fsLightboxStore";
import { FsLightbox } from "./FsLightbox";
import Naver from './components/nav/Naver.vue';
import SourceWrappersContainer from "./components/sources/SourceWrappersContainer.vue";
import SlideButtons from "./components/SlideButtons.vue";
import SlideSwipingHoverer from "./components/SlideSwipingHoverer.vue";
import { runLightboxMountedActions } from "./core/main-component/mounting/runLightboxMountedActions";

let updatedCallback;

export default {
    props: {
        toggler: Boolean,
        sources: Array,
        customSources: Array, // deprecated 1.1.0

        // slide number controlling
        slide: Number,
        source: String,
        sourceIndex: Number,

        // events
        onOpen: Function,
        onClose: Function,
        onInit: Function,
        onShow: Function,

        // types
        disableLocalStorage: Boolean,
        types: Array,
        type: String,

        // sources
        customAttributes: Array,
        videosPosters: Array, // deprecated 1.1.0
        maxYoutubeVideoDimensions: Object,

        // preferences
        loadOnlyCurrentSource: Boolean,
        slideDistance: { type: Number, default: 0.3 },
        openOnMount: Boolean,
        exitFullscreenOnClose: Boolean
    },
    components: { SlideButtons, SourceWrappersContainer, Naver, SlideSwipingHoverer },
    data() {
        return {
            isRendered: false
        };
    },
    watch: {
        slide: function (newSlide) {
            fsLightboxStore[this.fsLightboxIndex].core.lightboxUpdater.runCurrentStageIndexUpdateActionsFor(newSlide - 1);
        },
        sourceIndex: function (newSourceIndex) {
            fsLightboxStore[this.fsLightboxIndex].core.lightboxUpdater.runCurrentStageIndexUpdateActionsFor(newSourceIndex);
        },
        source: function (newSource) {
            fsLightboxStore[this.fsLightboxIndex].core.lightboxUpdater.runCurrentStageIndexUpdateActionsFor(
                this.sources.indexOf(newSource)
            );
        },
        /**
         * Toggler watcher must be after slide change watchers -
         * if both are updated simultaneously slide change must be called first
         */
        toggler: function () {
            fsLightboxStore[this.fsLightboxIndex].core.lightboxUpdater.handleTogglerUpdate();
        }
    },
    created() {
        this.fsLightboxIndex = fsLightboxStore.push(new FsLightbox(this)) - 1;

        const isLightboxRenderedManager = fsLightboxStore[this.fsLightboxIndex].componentsServices.isLightboxRenderedManager;
        isLightboxRenderedManager.get = () => this.isRendered;
        isLightboxRenderedManager.set = (value, callback) => {
            this.isRendered = value;

            if (callback) {
                updatedCallback = callback;
            }
        };
    },
    mounted() {
        fsLightboxStore[this.fsLightboxIndex].elements.container = this.$refs['container'];
        runLightboxMountedActions(fsLightboxStore[this.fsLightboxIndex]);
    },
    updated() {
        fsLightboxStore[this.fsLightboxIndex].elements.container = this.$refs['container'];

        if (updatedCallback) {
            updatedCallback();
        }

        updatedCallback = null;
    }
};
</script>
