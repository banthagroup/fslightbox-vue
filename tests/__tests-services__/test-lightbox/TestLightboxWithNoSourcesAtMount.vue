<template>
    <div>
        <FsLightbox
            :toggler="toggler"
            :sources="sources"
            :types="testTypes"
        />
        <button id="btn-set-up-sources" @click="setUpSources" />
        <button id="btn-open-lightbox" @click="toggler = !toggler" />
    </div>
</template>

<script>
import FsLightbox from "../../../src/FsLightbox.vue";
import { testSources, testTypes } from "../testVars";

export default {
    components: { FsLightbox },
    data() {
        return {
            sources: [],
            toggler: false,
            testTypes: testTypes
        }
    },
    methods: {
        setUpSources() {
            this.sources = testSources
        }
    }
}
</script>