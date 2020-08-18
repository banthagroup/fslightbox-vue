<template>
    <div>
        <FsLightbox
            :toggler="toggler"
            :sources="sources"
            :types="testTypes"
            :load-only-current-source="loadOnlyCurrentSource"
        />
        <button id="btn-set-up-load-only-current-source" @click="loadOnlyCurrentSource = true" />
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
            sources: testSources,
            toggler: false,
            testTypes: testTypes,
            loadOnlyCurrentSource: false
        }
    }
}
</script>