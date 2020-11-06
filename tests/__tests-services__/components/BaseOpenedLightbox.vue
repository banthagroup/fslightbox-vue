<template>
    <FsLightbox
        :toggler="false"
        :open-on-mount="true"
        :sources="testSources"
        :types="testTypes"
    />
</template>

<script>
import FsLightbox from "../../../src/FsLightbox.vue";
import { testSources, testTypes } from "../testVars";

export default {
    components: { FsLightbox },
    data() {
        return {
            testSources: testSources,
            testTypes: testTypes
        }
    }
}
</script>
