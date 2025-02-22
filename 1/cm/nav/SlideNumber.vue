<template>
    <div ref="source-outer" class="fslightbox-slide-number-container">
        <div ref="source-inner" class="fslightbox-flex-centered">
            <span>{{ slide }}</span>
            <span class="fslightbox-slash" />
            <span>{{ sourcesCount }}</span>
        </div>
    </div>
</template>

<script>
import { a } from "../../a";

export default {
    props: { i: Number },
    data() {
        return {
            slide: a[this.i].stageIndexes.current + 1,
            sourcesCount: a[this.i].props.sources.length
        }
    },
    created() {
        a[this.i].componentsServices.setSlideNumber = (number) => this.slide = number;
    },
    mounted() {
        if (this.$refs['source-inner'].offsetWidth > 55) {
            this.$refs['source-outer'].style.justifyContent = 'flex-start';
        }
    }
}
</script>
