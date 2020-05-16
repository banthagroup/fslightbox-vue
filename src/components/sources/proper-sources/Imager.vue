<template>
    <img
        class="fslightbox-source"
        @load="onLoad"
        ref="ref"
        :src="src"
        :alt="src"
    />
</template>

<script>
    import { fsLightboxStore } from "../../../fsLightboxStore";

    export default {
        props: { fsLightboxIndex: Number, i: Number },
        data() {
            const {
                collections: { sourcesLoadsHandlers },
                data: { sources }
            } = fsLightboxStore[this.fsLightboxIndex];

            return {
                onLoad: sourcesLoadsHandlers[this.i].handleImageLoad,
                src: sources[this.i]
            }
        },
        mounted() {
            fsLightboxStore[this.fsLightboxIndex].elements.sources[this.i] = this.$refs['ref'];
        }
    };
</script>
