<template>
    <div v-if="isOpen" ref="container" class="fslightbox-container fslightbox-full-dimension fslightbox-fade-in-strong">
        <Nav :fs-lightbox-index="this.fsLightboxIndex"/>
        <SourcesOutersWrapper :fs-lightbox-index="this.fsLightboxIndex"/>
        <SlideButtons :fs-lightbox-index="this.fsLightboxIndex"/>
        <SlideSwipingHoverer :fs-lightbox-index="this.fsLightboxIndex"/>
    </div>
</template>

<script>
    import { fsLightboxStore } from "./fsLightboxStore";
    import { FsLightbox } from "./FsLightbox";
    import Nav from './components/nav/Nav.vue';
    import SourcesOutersWrapper from "./components/sources/SourcesOutersWrapper.vue";
    import SlideButtons from "./components/SlideButtons.vue";
    import SlideSwipingHoverer from "./components/SlideSwipingHoverer.vue";
    import { runLightboxMountedActions } from "./core/main-component/mounting/runLightboxMountedActions";

    let updatedCallback;

    export default {
        props: {
            toggler: Boolean,
            sources: Array,

            // custom sources
            customSources: Array,

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

            //sources
            videosPosters: Array,
            maxYoutubeVideoDimensions: Object,

            // preferences
            slideDistance: { type: Number, default: 0.3 },
            openOnMount: Boolean,
        },
        components: { SlideButtons, SourcesOutersWrapper, Nav, SlideSwipingHoverer },
        data() {
            return {
                isOpen: this.openOnMount
            };
        },
        watch: {
            toggler: function () {
                fsLightboxStore[this.fsLightboxIndex].core.lightboxUpdater.handleTogglerUpdate();
            },
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
            }
        },
        created() {
            this.fsLightboxIndex = fsLightboxStore.push(new FsLightbox(this)) - 1;

            const isLightboxOpenManger = fsLightboxStore[this.fsLightboxIndex].componentsServices.isLightboxOpenManager;
            isLightboxOpenManger.get = () => this.isOpen;
            isLightboxOpenManger.set = (value, callback) => {
                this.isOpen = value;

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
