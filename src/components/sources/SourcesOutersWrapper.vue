<template>
    <div class="fslightbox-absoluted fslightbox-full-dimension"
         ref="ref"
         @mousedown="listener"
         @touchstart="listener">
        <SourceOuter
            v-for="(n, i) in sources.length"
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
        const {
            core: { slideSwipingDown: { listener } },
            data: { sources }
        } = fsLightboxStore[this.fsLightboxIndex];

        return {
            sources: sources,
            listener: listener
        }
    },
    mounted() {
        fsLightboxStore[this.fsLightboxIndex].elements.sourcesOutersWrapper = this.$refs['ref'];
    }
}
</script>
