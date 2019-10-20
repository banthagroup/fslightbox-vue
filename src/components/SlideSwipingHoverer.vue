<template>
    <div
        class="fslightbox-slide-swiping-hoverer fslightbox-full-dimension fslightbox-absoluted"
        v-if="isSlideSwipingHovererShown"
    />
</template>

<script>
    import { fsLightboxStore } from "../fsLightboxStore";

    export default {
        props: { fsLightboxIndex: Number },
        data() {
            return {
                isSlideSwipingHovererShown: false
            }
        },
        created() {
            const isSlideSwipingHovererShownManager = fsLightboxStore[this.fsLightboxIndex].componentsServices.isSlideSwipingHovererShownManager;
            isSlideSwipingHovererShownManager.get = () => this.isSlideSwipingHovererShown;
            isSlideSwipingHovererShownManager.set = (value) => this.isSlideSwipingHovererShown = value;
        }
    }
</script>
