<template>
    <div class="fslightbox-source-outer fslightbox-absoluted fslightbox-full-dimension fslightbox-flex-centered">
        <SourceInner :fs-lightbox-index="fsLightboxIndex" :i="i"/>
        <Loader v-if="!isSourceLoaded"/>
    </div>
</template>

<script>
    import SourceInner from "./SourceInner.vue";
    import Loader from "../helpers/Loader.vue";
    import { fsLightboxStore } from "../../fsLightboxStore";

    export default {
        props: { fsLightboxIndex: Number, i: Number },
        components: { SourceInner, Loader },
        data() {
            return {
                isSourceLoaded: false
            }
        },
        created() {
            fsLightboxStore[this.fsLightboxIndex].componentsServices.isSourceLoadedManagersCollection[this.i] = {
                set: (value) => this.isSourceLoaded = value
            };
        }
    }
</script>
