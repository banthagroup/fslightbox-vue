<template>
    <div
        class="fslightbox-slide-swiping-hoverer fslightbox-full-dimension fslightbox-absoluted"
        v-if="isSlideSwipingHovererShown"
    />
</template>

<script>
    import { a } from "../a";

    export default {
        props: { i: Number },
        data() {
            return {
                isSlideSwipingHovererShown: false
            }
        },
        created() {
            const { componentsServices } = a[this.i];

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
