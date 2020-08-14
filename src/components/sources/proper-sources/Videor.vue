<template>
    <video class="fslightbox-source fslightbox-video"
           @loadedmetadata="onLoad"
           ref="ref"
           controls
           v-bind="attributes">
        <source :src="src" />
    </video>
</template>

<script>
import { fsLightboxStore } from "../../../fsLightboxStore";

export default {
    props: { fsLightboxIndex: Number, i: Number },
    data() {
        const {
            collections: { sourcesLoadsHandlers },
            data: { sources },
            props: { customAttributes, videosPosters }
        } = fsLightboxStore[this.fsLightboxIndex];

        const attributes = (customAttributes && customAttributes[this.i]) ? customAttributes[this.i] : {}
        if (videosPosters && videosPosters[this.i]) {
            attributes['poster'] = videosPosters[this.i]
        }

        return {
            onLoad: sourcesLoadsHandlers[this.i].handleVideoLoad,
            src: sources[this.i],
            attributes: attributes
        }
    },
    mounted() {
        fsLightboxStore[this.fsLightboxIndex].elements.sources[this.i] = this.$refs['ref'];
    }
};
</script>
