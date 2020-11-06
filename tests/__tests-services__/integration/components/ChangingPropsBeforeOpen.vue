<template>
    <div>
        <button id="btn-toggler" @click="toggler = !toggler">Toggle Lightbox</button>
        <button id="btn-update-props" @click="updateSourcesAndSlide">Update sources and slide</button>

        <fs-lightbox
            :toggler="toggler"
            :sources="sources"
            :source="source"
        />
    </div>
</template>

<script>
import FsLightbox from "../../../../src/FsLightbox.vue";
import { TEST_VIDEO_URL, testSources } from "../../testVars";

export default {
    components: {
        FsLightbox
    },
    data() {
        return {
            toggler: false,
            sources: null,
            source: null
        }
    },
    methods: {
        updateSourcesAndSlide() {
            this.source = TEST_VIDEO_URL;
            this.sources = testSources;
        }
    }
};
</script>
