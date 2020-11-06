<template>
    <div data-test-id="source-wrappers-container"
         class="fslightbox-absoluted fslightbox-full-dimension"
         ref="ref"
         @mousedown="listener"
         @touchstart="listener">
        <SourceMainWrapper
            v-for="(n, i) in sources.length"
            :key="i"
            :i="i"
            :fs-lightbox-index="fsLightboxIndex"
        />
    </div>
</template>

<script>
import SourceMainWrapper from './SourceMainWrapper.vue';
import { fsLightboxStore } from "../../fsLightboxStore";

export default {
    props: { fsLightboxIndex: Number },
    components: { SourceMainWrapper },
    data() {
        const {
            core: { slideSwipingDown: { listener } },
            props: { sources }
        } = fsLightboxStore[this.fsLightboxIndex];

        return {
            sources: sources,
            listener: listener
        }
    },
    mounted() {
        fsLightboxStore[this.fsLightboxIndex].elements.sourceWrappersContainer = this.$refs['ref'];
    }
}
</script>
