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
import { fsLightboxStore } from "../../../fsLightboxStore";

export default {
    props: { fsLightboxIndex: Number, i: Number },
    data() {
        const {
            collections: { sourcesLoadsHandlers },
            props: { customAttributes, sources }
        } = fsLightboxStore[this.fsLightboxIndex];

        return {
            onLoad: (e) => {
                sourcesLoadsHandlers[this.i].handleImageLoad(e)
            },
            src: sources[this.i],
            customAttributes: customAttributes && customAttributes[this.i]
        }
    },
    mounted() {
        fsLightboxStore[this.fsLightboxIndex].elements.sources[this.i] = this.$refs['ref'];
    }
};
</script>
