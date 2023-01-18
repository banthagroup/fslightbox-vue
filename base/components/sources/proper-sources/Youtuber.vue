<template>
    <iframe
        class="fslightbox-source fslightbox-youtube-iframe"
        ref="ref"
        :src="src"
        allowfullscreen
        v-bind="customAttributes"
    />
</template>

<script>
import { getYoutubeVideoIdFromUrl } from "../../../helpers/source/getYoutubeVideoIdFromUrl";
import { fsLightboxStore } from "../../../fsLightboxStore";

export default {
    props: { fsLightboxIndex: Number, i: Number },
    data() {
        const { props: { customAttributes, sources } } = fsLightboxStore[this.fsLightboxIndex]

        return {
            src: `https://www.youtube.com/embed/${getYoutubeVideoIdFromUrl(sources[this.i])}?enablejsapi=1`,
            customAttributes: customAttributes && customAttributes[this.i]
        }
    },
    mounted() {
        const {
            collections: { sourceLoadHandlers },
            elements: { sources }
        } = fsLightboxStore[this.fsLightboxIndex];

        sources[this.i] = this.$refs['ref'];

        sourceLoadHandlers[this.i].handleYoutubeLoad();
    }
};
</script>
