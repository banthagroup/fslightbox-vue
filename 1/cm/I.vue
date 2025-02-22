<template>
    <img
        class="fslightbox-source"
        @load="onLoad"
        ref="ref"
        :src="src"
        v-bind="customAttributes"
    />
</template>

<script>
import { a } from "../a";

export default {
    props: { i: Number, j: Number },
    data() {
        const {
            collections: { sourceLoadHandlers },
            props: { customAttributes, sources }
        } = a[this.i];

        return {
            onLoad: (e) => {
                sourceLoadHandlers[this.j].handleImageLoad(e)
            },
            src: sources[this.j],
            customAttributes: customAttributes && customAttributes[this.j]
        }
    },
    mounted() {
        a[this.i].elements.sources[this.j] = this.$refs['ref'];
    }
};
</script>
