<template>
    <div data-test-class="source-outer" ref="ref"
         class="fslightbox-absoluted fslightbox-full-dimension fslightbox-flex-centered">
        <SourceAnimationWrapper :fs-lightbox-index="fsLightboxIndex" :i="i" />
        <Loader v-if="!isSourceLoaded" />
    </div>
</template>

<script>
import SourceAnimationWrapper from "./SourceAnimationWrapper.vue";
import Loader from "../helpers/Loader.vue";
import { fsLightboxStore } from "../../fsLightboxStore";

export default {
    props: { fsLightboxIndex: Number, i: Number },
    components: { SourceAnimationWrapper, Loader },
    data() {
        return {
            isSourceLoaded: false
        }
    },
    created() {
        fsLightboxStore[this.fsLightboxIndex].componentsServices.hideLoaderCollection[this.i] = () => this.isSourceLoaded = true;
    },
    mounted() {
        fsLightboxStore[this.fsLightboxIndex].elements.sourceMainWrappers[this.i] = this.$refs.ref;
    }
}
</script>
