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
    props: { fsLightboxIndex: Number, i: Number },
    data() {
        const {
            collections: { sourceLoadHandlers },
            props: { customAttributes, sources }
        } = a[this.fsLightboxIndex];

        return {
            onLoad: (e) => {
                sourceLoadHandlers[this.i].handleImageLoad(e)
            },
            src: sources[this.i],
            customAttributes: customAttributes && customAttributes[this.i]
        }
    },
    mounted() {
        a[this.fsLightboxIndex].elements.sources[this.i] = this.$refs['ref'];
    }
};
</script>
