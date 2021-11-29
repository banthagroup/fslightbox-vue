<template>
    <div>
        <button id="btn-update-slide-and-toggler" @click="updateSlideAndToggler" />

        <FsLightbox
            :toggler="toggler"
            :sources="testSources"
            :source="source"
        />
    </div>
</template>

<script>
import FsLightbox from "../../../../../base/src/js/FsLightbox.vue";
import { TEST_VIDEO_URL, TEST_YOUTUBE_URL, testSources } from "<rootDir>/tests/__tests-services__/testVars";

export default {
    components: {
        FsLightbox
    },
    data() {
        return {
            toggler: false,
            testSources: testSources,
            source: TEST_VIDEO_URL
        }
    },
    methods: {
        updateSlideAndToggler() {
            this.source = TEST_YOUTUBE_URL;
            this.toggler = !this.toggler;
        }
    }
}
</script>