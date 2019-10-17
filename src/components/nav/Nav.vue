<template>
    <div ref="nav" class="fslightbox-nav">
        <Toolbar :fs-lightbox-index="this.fsLightboxIndex"/>
        <SlideNumber v-if="hasMoreThanSource" :fs-lightbox-index="this.fsLightboxIndex"/>
    </div>
</template>

<script>
    import Toolbar from "./Toolbar.vue";
    import SlideNumber from "./SlideNumber.vue";
    import { fsLightboxStore } from "../../fsLightboxStore";

    export default {
        components: { SlideNumber, Toolbar },
        props: { fsLightboxIndex: Number },
        data() {
            return { hasMoreThanSource: fsLightboxStore[this.fsLightboxIndex].data.sourcesCount > 1 }
        }
    };
</script>
