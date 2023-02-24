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
import { a } from "../a";

export default {
    props: { i: Number, j: Number },
    data() {
        const {
            collections: { sourceLoadHandlers },
            props: { customAttributes, sources }
        } = a[this.i];

        return {
            onLoad: sourceLoadHandlers[this.j].handleVideoLoad,
            src: sources[this.j],
            customAttributes: customAttributes && customAttributes[this.j]
        }
    },
    mounted() {
        a[this.i].elements.sources[this.j] = this.$refs['ref'];
    }
};
</script>
