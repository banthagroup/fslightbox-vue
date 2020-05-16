<template>
    <video class="fslightbox-source fslightbox-video"
           @loadedmetadata="onLoad"
           ref="ref"
           :poster="poster"
           controls>
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
                props: { videosPosters }
            } = fsLightboxStore[this.fsLightboxIndex];

            return {
                onLoad: sourcesLoadsHandlers[this.i].handleVideoLoad,
                src: sources[this.i],
                poster: videosPosters && videosPosters[this.i]
            }
        },
        mounted() {
            fsLightboxStore[this.fsLightboxIndex].elements.sources[this.i] = this.$refs['ref'];
        }
    };
</script>
