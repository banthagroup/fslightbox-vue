<template>
    <div ref="source-outer" class="fslightbox-slide-number-container">
        <div ref="source-inner" class="fslightbox-flex-centered">
            <span data-test-id="slide-number">{{ slide }}</span>
            <span class="fslightbox-slash" />
            <span>{{ sourcesCount }}</span>
        </div>
    </div>
</template>

<script>
import { fsLightboxStore } from "../../fsLightboxStore";

export default {
    props: { fsLightboxIndex: Number },
    data() {
        return {
            slide: fsLightboxStore[this.fsLightboxIndex].stageIndexes.current + 1,
            sourcesCount: fsLightboxStore[this.fsLightboxIndex].props.sources.length
        }
    },
    created() {
        fsLightboxStore[this.fsLightboxIndex].componentsServices.setSlideNumber = (number) => this.slide = number;
    },
    mounted() {
        if (this.$refs['source-inner'].offsetWidth > 55) {
            this.$refs['source-outer'].style.justifyContent = 'flex-start';
        }
    }
}
</script>
