<template>
    <div v-if="isOpen" ref="container"
         class="fslightbox-container fslightbox-full-dimension fslightbox-fade-in-strong">
        <Naver :fs-lightbox-index="this.fsLightboxIndex" />
        <Swc :fs-lightbox-index="this.fsLightboxIndex" />
        <SlideButtons :fs-lightbox-index="this.fsLightboxIndex" />
        <SlideSwipingHoverer :fs-lightbox-index="this.fsLightboxIndex" />
    </div>
</template>

<script>
import "./c/styles/styles-injection/styles-injection";
import { a } from "./a";
import { FsLightbox } from "./o";
import Naver from './cm/nav/Naver.vue';
import Swc from "./cm/Swc.vue";
import SlideButtons from "./cm/SlideButtons.vue";
import SlideSwipingHoverer from "./cm/SlideSwipingHoverer.vue";
import { runLightboxMountedActions } from "./c/main-component/mounting/runLightboxMountedActions";

let updatedCallback;

export default {
    props: {
        toggler: Boolean,
        sources: Array,

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
            isOpen: false
        };
    },
    watch: {
        slide: function () {
            a[this.fsLightboxIndex].core.lightboxUpdater.handleSlideProp();
        },
        sourceIndex: function () {
            a[this.fsLightboxIndex].core.lightboxUpdater.handleSlideProp();
        },
        source: function () {
            a[this.fsLightboxIndex].core.lightboxUpdater.handleSlideProp();
        },
        /**
         * Toggler watcher must be after slide change watchers -
         * if both are updated simultaneously slide change must be called first
         */
        toggler: function () {
            a[this.fsLightboxIndex].core.lightboxUpdater.handleSlideProp();
            a[this.fsLightboxIndex].core.lightboxUpdater.handleTogglerUpdate();
        }
    },
    created() {
        this.fsLightboxIndex = a.push(new FsLightbox(this)) - 1;

        const isLightboxOpenManager = a[this.fsLightboxIndex].componentsServices.isLightboxOpenManager;
        isLightboxOpenManager.get = () => this.isOpen;
        isLightboxOpenManager.set = (value, callback) => {
            this.isOpen = value;

            if (callback) {
                updatedCallback = callback;
            }
        };
    },
    mounted() {
        a[this.fsLightboxIndex].elements.container = this.$refs['container'];
        runLightboxMountedActions(a[this.fsLightboxIndex]);
    },
    updated() {
        a[this.fsLightboxIndex].elements.container = this.$refs['container'];

        if (updatedCallback) {
            updatedCallback();
        }

        updatedCallback = null;
    }
};
</script>
