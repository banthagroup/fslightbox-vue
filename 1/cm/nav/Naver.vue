<template>
    <div ref="nav" class="fslightbox-nav">
        <Toolbar :i="i" />
        <SlideNumber v-if="hasMoreThanSource" :i="i" />
    </div>
</template>

<script>
import Toolbar from "./toolbar/Toolbar.vue";
import SlideNumber from "./SlideNumber.vue";
import { a } from "../../a";

export default {
    components: { SlideNumber, Toolbar },
    props: { i: Number },
    data() {
        return { hasMoreThanSource: a[this.i].props.sources.length > 1 }
    }
};
</script>
