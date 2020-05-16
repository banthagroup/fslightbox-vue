<template>
    <iframe
        class="fslightbox-source fslightbox-youtube-iframe"
        ref="ref"
        :src="src"
        allowfullscreen
    />
</template>

<script>
    import { getYoutubeVideoIdFromUrl } from "../../../helpers/source/getYoutubeVideoIdFromUrl";
    import { fsLightboxStore } from "../../../fsLightboxStore";

    export default {
        props: { fsLightboxIndex: Number, i: Number },
        data() {
            return {
                src: `https://www.youtube.com/embed/${
                    getYoutubeVideoIdFromUrl(fsLightboxStore[this.fsLightboxIndex].data.sources[this.i])
                }`
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
