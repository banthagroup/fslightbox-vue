<template>
    <div data-test-id="source-wrappers-container"
         class="fslightbox-absoluted fslightbox-full-dimension"
         ref="ref"
         @pointerdown="listener">
        <Smw
            v-for="(n, i) in sources.length"
            :key="i"
            :i="i"
            :fs-lightbox-index="fsLightboxIndex"
        />
    </div>
</template>

<script>
import Smw from './Smw.vue';
import { a } from "../a";

export default {
    props: { fsLightboxIndex: Number },
    components: { Smw },
    data() {
        const {
            core: { sourcesPointerDown: { listener } },
            props: { sources }
        } = a[this.fsLightboxIndex];

        return {
            sources: sources,
            listener: listener
        }
    },
    mounted() {
        a[this.fsLightboxIndex].elements.sourceWrappersContainer = this.$refs['ref'];
    }
}
</script>
