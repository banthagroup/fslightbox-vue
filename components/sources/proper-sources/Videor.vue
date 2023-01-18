<template>
    <video class="fslightbox-source fslightbox-video"
           @loadedmetadata="onLoad"
           ref="ref"
           controls
           v-bind="customAttributes">
        <source :src="src" />
    </video>
</template>

<script>
import { fsLightboxStore } from "../../../fsLightboxStore";

export default {
    props: { fsLightboxIndex: Number, i: Number },
    data() {
        const {
            collections: { sourceLoadHandlers },
            props: { customAttributes, sources }
        } = fsLightboxStore[this.fsLightboxIndex];

        return {
            onLoad: sourceLoadHandlers[this.i].handleVideoLoad,
            src: sources[this.i],
            customAttributes: customAttributes && customAttributes[this.i]
        }
    },
    mounted() {
        fsLightboxStore[this.fsLightboxIndex].elements.sources[this.i] = this.$refs['ref'];
    }
};
</script>
