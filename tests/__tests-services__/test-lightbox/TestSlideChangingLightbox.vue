<template>
    <div>
        <button id="btn-toggler" @click="toggler = !toggler">Toggle Lightbox</button>

        <button id="btn-first-slide" @click="openLightboxOnSlide(1)">Open on 1 slide</button>
        <button id="btn-second-slide" @click="openLightboxOnIndex(1)">Open on 2 slide</button>
        <button id="btn-third-slide" @click="changeSlideToSource(TEST_YOUTUBE_URL)">Change slide to 3</button>

        <FsLightbox
            :toggler="toggler"
            :slide="slide"
            :source-index="sourceIndex"
            :source="source"
            :sources="testSources"
            :custom-sources="[null, null, null, null, TestCustomSource]"
            :slide-distance=".4"
        />
    </div>
</template>

<script>
    import FsLightbox from "../../../src/FsLightbox.vue";
    import TestCustomSource from "./TestCustomSource.vue";
    import { TEST_YOUTUBE_URL, testSources } from "../testVars";

    export default {
        components: { FsLightbox, TestCustomSource },
        data() {
            return {
                TEST_YOUTUBE_URL: TEST_YOUTUBE_URL,
                TestCustomSource: TestCustomSource,
                toggler: false,
                slide: null,
                sourceIndex: null,
                source: null,
                testSources: testSources
            }
        },
        methods: {
            openLightboxOnSlide: function (number) {
                this.slide = number;
                this.toggler = !this.toggler;
            },
            openLightboxOnIndex: function (index) {
                this.sourceIndex = index;
                this.toggler = !this.toggler;
            },
            changeSlideToSource: function (source) {
                this.source = source;
            }
        }
    }
</script>
