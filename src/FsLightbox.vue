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

    export default {
        components: { SlideButtons, SourcesOutersWrapper, Nav, SlideSwipingHoverer },
        props: {
            toggler: Boolean,
            sources: Array,

            // custom sources
            customSources: Array,

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
        data() {
            return {
                isOpen: this.openOnMount
            };
        },
        created() {
            this.fsLightboxIndex = fsLightboxStore.push(new FsLightbox(this)) - 1;

            fsLightboxStore[this.fsLightboxIndex].getIsOpen = () => this.isOpen;
            fsLightboxStore[this.fsLightboxIndex].setIsOpen = (value) => this.isOpen = value;
        },
        mounted() {
            fsLightboxStore[this.fsLightboxIndex].elements.container = this.$refs['container'];
            runLightboxMountedActions(fsLightboxStore[this.fsLightboxIndex]);
        }
    };
</script>
