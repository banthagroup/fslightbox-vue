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
        const {
            data: { sources },
            props: { customAttributes }
        } = fsLightboxStore[this.fsLightboxIndex]

        return {
            src: `https://www.youtube.com/embed/${
                getYoutubeVideoIdFromUrl(sources[this.i])
            }`,
            customAttributes: customAttributes && customAttributes[this.i]
        }
    },
    mounted() {
        const {
            collections: { sourcesLoadsHandlers },
            elements: { sources }
        } = fsLightboxStore[this.fsLightboxIndex];

        sources[this.i] = this.$refs['ref'];

        sourcesLoadsHandlers[this.i].handleYoutubeLoad();
    }
};
</script>
