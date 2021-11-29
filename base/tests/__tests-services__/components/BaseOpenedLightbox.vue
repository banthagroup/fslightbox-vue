<template>
    <FsLightbox
        :toggler="false"
        :open-on-mount="true"
        :sources="testSources"
        :types="testTypes"
    />
</template>

<script>
import FsLightbox from "../../../../base/src/js/index";
import { testSources, testTypes } from "<rootDir>/tests/__tests-services__/testVars";

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
