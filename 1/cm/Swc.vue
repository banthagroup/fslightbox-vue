<template>
    <div
         class="fslightbox-absoluted fslightbox-full-dimension"
         @pointerdown="listener">
        <Smw
            v-for="(n, j) in sources.length"
            :i="i"
            :j="j"
	    :key="j"
        />
    </div>
</template>

<script>
import Smw from './Smw.vue';
import { a } from "../a";

export default {
    props: { i: Number },
    components: { Smw },
    data() {
        const {
            core: { sourcesPointerDown: { listener } },
            props: { sources }
        } = a[this.i];

        return {
            sources: sources,
            listener: listener
        }
    }
}
</script>
