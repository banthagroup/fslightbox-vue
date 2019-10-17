<template>
    <div class="fslightbox-container fslightbox-full-dimension fslightbox-fade-in-strong">
        <Nav :fs-lightbox-index="this.fsLightboxIndex"/>
    </div>
</template>
<script>
    import Nav from './components/nav/Nav.vue';
    import { fsLightboxStore } from "./fsLightboxStore";
    import { FsLightbox } from "./FsLightbox";

    export default {
        components: { Nav },
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
