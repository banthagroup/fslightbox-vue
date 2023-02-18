<template>
    <div
         class="fslightbox-absoluted fslightbox-full-dimension"
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
    }
}
</script>
