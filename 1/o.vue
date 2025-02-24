<template>
    <div v-if="isOpen" ref="container"
         class="fslightbox-container fslightbox-full-dimension fslightbox-fade-in-strong">
        <Naver :i="i" />
        <Swc :i="i" />
        <SlideButtons :i="i" />
        <SlideSwipingHoverer :i="i" />
    </div>
</template>

<script>
import "./c/styles/styles-injection/styles-injection";
import { a } from "./a";
import { o } from "./o";
import Naver from './cm/nav/Naver.vue';
import Swc from "./cm/Swc.vue";
import SlideButtons from "./cm/SlideButtons.vue";
import SlideSwipingHoverer from "./cm/SlideSwipingHoverer.vue";
import { m } from "./c/m";

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
	autoplay: Boolean,

        // preferences
        loadOnlyCurrentSource: Boolean,
        slideDistance: { type: Number, default: 0.3 },
        openOnMount: Boolean,
        exitFullscreenOnClose: Boolean
    },
    components: { Swc, SlideButtons, Naver, SlideSwipingHoverer },
    data() {
        return {
            isOpen: false
        }
    },
    watch: {
        slide: function () {
            a[this.i].core.lightboxUpdater.handleSlideProp();
        },
        sourceIndex: function () {
            a[this.i].core.lightboxUpdater.handleSlideProp();
        },
        source: function () {
            a[this.i].core.lightboxUpdater.handleSlideProp();
        },
        /**
         * Toggler watcher must be after slide change watchers -
         * if both are updated simultaneously slide change must be called first
         */
        toggler: function () {
            a[this.i].core.lightboxUpdater.handleSlideProp();
            a[this.i].core.lightboxUpdater.handleTogglerUpdate();
        }
    },
    created() {
        this.i = a.push(new o(this)) - 1;

        const isLightboxOpenManager = a[this.i].componentsServices.isLightboxOpenManager;
        isLightboxOpenManager.get = () => this.isOpen;
        isLightboxOpenManager.set = (value, callback) => {
            this.isOpen = value;

            if (callback) {
                updatedCallback = callback;
            }
        };
    },
    mounted() {
        a[this.i].elements.container = this.$refs['container'];
        m(a[this.i]);
    },
    updated() {
        a[this.i].elements.container = this.$refs['container'];

        if (updatedCallback) {
            updatedCallback();
        }

        updatedCallback = null;
    }
};
</script>
