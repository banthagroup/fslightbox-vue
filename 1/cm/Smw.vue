<template>
    <div data-test-class="source-main-wrapper" ref="ref"
         class="fslightbox-absoluted fslightbox-full-dimension fslightbox-flex-centered">
        <Saw :fs-lightbox-index="fsLightboxIndex" :i="i" />
        <Loader v-if="!isSourceLoaded" />
    </div>
</template>

<script>
import Saw from "./Saw.vue";
import Loader from "../h/Loader.vue";
import { a } from "../a";

export default {
    props: { fsLightboxIndex: Number, i: Number },
    components: { SourceAnimationWrapper, Loader },
    data() {
        return {
            isSourceLoaded: false
        }
    },
    created() {
        a[this.fsLightboxIndex].componentsServices.hideSourceLoaderCollection[this.i] = () => this.isSourceLoaded = true;
    },
    mounted() {
        a[this.fsLightboxIndex].elements.sourceMainWrappers[this.i] = this.$refs.ref;
    }
}
</script>
