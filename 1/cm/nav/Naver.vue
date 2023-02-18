<template>
    <div ref="nav" class="fslightbox-nav">
        <Toolbar :fs-lightbox-index="fsLightboxIndex" />
        <SlideNumber v-if="hasMoreThanSource" :fs-lightbox-index="fsLightboxIndex" />
    </div>
</template>

<script>
import Toolbar from "./toolbar/Toolbar.vue";
import SlideNumber from "./SlideNumber.vue";
import { a } from "../../a";

export default {
    components: { SlideNumber, Toolbar },
    props: { fsLightboxIndex: Number },
    data() {
        return { hasMoreThanSource: a[this.fsLightboxIndex].props.sources.length > 1 }
    }
};
</script>
