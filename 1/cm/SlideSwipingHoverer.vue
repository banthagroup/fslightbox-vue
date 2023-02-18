<template>
    <div
        class="fslightbox-slide-swiping-hoverer fslightbox-full-dimension fslightbox-absoluted"
        v-if="isSlideSwipingHovererShown"
    />
</template>

<script>
    import { a } from "../a";

    export default {
        props: { fsLightboxIndex: Number },
        data() {
            return {
                isSlideSwipingHovererShown: false
            }
        },
        created() {
            const { componentsServices } = a[this.fsLightboxIndex];

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
