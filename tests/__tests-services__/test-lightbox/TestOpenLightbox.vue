<template>
    <FsLightbox
        :toggler="false"
        :open-on-mount="true"
        :sources="testSources"
        :custom-sources="[null, null, null, null, TestCustomSource]"
        :types="testTypes"
    />
</template>

<script>
import FsLightbox from "../../../src/FsLightbox.vue";
import TestCustomSource from "./TestCustomSource.vue";
import { testSources, testTypes } from "../testVars";

export default {
    components: { FsLightbox, TestCustomSource },
    data() {
        return {
            TestCustomSource: TestCustomSource,
            testSources: testSources,
            testTypes: testTypes
        }
    },
}
</script>
