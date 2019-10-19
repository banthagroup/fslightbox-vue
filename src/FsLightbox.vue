<template>
    <div class="fslightbox-container fslightbox-full-dimension fslightbox-fade-in-strong">
        <Nav :fs-lightbox-index="this.fsLightboxIndex"/>
        <SourcesOutersWrapper :fs-lightbox-index="this.fsLightboxIndex"/>
        <SlideButtons :fs-lightbox-index="this.fsLightboxIndex"/>
    </div>
</template>
<script>
    import { fsLightboxStore } from "./fsLightboxStore";
    import { FsLightbox } from "./FsLightbox";
    import Nav from './components/nav/Nav.vue';
    import SourcesOutersWrapper from "./components/sources/SourcesOutersWrapper.vue";
    import SlideButtons from "./components/SlideButtons.vue";

    export default {
        components: { SlideButtons, SourcesOutersWrapper, Nav },
        props: {
            toggler: Boolean,
            sources: Array,

            customSources: Array,

            slideDistance: { type: Number, default: 0.3 }
        },
        created() {
            this.fsLightboxIndex = fsLightboxStore.push(new FsLightbox(this)) - 1;
        }
    };
</script>
