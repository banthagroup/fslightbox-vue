<template>
    <div>
        <button @click="toggler = !toggler">Toggle Lightbox</button>
        <button @click="openLightboxOnSlide(1)">Open on 1 slide</button>
        <button @click="openLightboxOnSlide(2)">Open on 2 slide</button>
        <FsLightbox
            :toggler="toggler"
            :slide="slide"
            :sources="testSources"
            :custom-sources="[null, null, null, null, Custom]"
        />
    </div>
</template>

<script>
    import FsLightbox from "../../../src/FsLightbox.vue";
    import Custom from "./TestCustomSource.vue";
    import { testSources } from "../testVars";

    export default {
        components: { FsLightbox, Custom },
        data() {
            return {
                Custom: Custom,
                toggler: false,
                slide: 1,
                testSources: testSources
            }
        },
        methods: {
            openLightboxOnSlide: function (number) {
                this.slide = number;
                this.toggler = !this.toggler;
            }
        }
    }
</script>
