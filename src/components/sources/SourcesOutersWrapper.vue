<template>
    <div ref="ref" class="fslightbox-absoluted fslightbox-full-dimension">
        <SourceOuter
            v-for="(n, i) in sourcesCount"
            :key="i"
            :i="i"
            :fs-lightbox-index="fsLightboxIndex"
        />
    </div>
</template>

<script>
    import SourceOuter from './SourceOuter.vue';
    import { fsLightboxStore } from "../../fsLightboxStore";

    export default {
        props: { fsLightboxIndex: Number },
        components: { SourceOuter },
        data() {
            return {
                sourcesCount: fsLightboxStore[this.fsLightboxIndex].data.sourcesCount
            }
        },
        mounted() {
            fsLightboxStore[this.fsLightboxIndex].elements.sourcesOutersWrapper = this.$refs['ref'];
        }
    }
</script>
