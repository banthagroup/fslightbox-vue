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
            const { componentsServices } = fsLightboxStore[this.fsLightboxIndex];

            componentsServices.showSlideSwipingHoverer = () => {
                if (!this.isSlideSwipingHovererShown) {
                    this.isSlideSwipingHovererShown = true;
                }
            };

            componentsServices.hideSlideSwipingHoverer = () => {
                if (this.isSlideSwipingHovererShown) {
                    this.isSlideSwipingHovererShown = false;
                }
            };
        }
    }
</script>
