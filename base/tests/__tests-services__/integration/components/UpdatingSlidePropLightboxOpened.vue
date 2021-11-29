<template>
    <div>
        <button id="btn-update-slide" @click="slide = 3" />

        <FsLightbox
            :sources="testSources"
            :slide="slide"
            :open-on-mount="true"
        />
    </div>
</template>

<script>
import FsLightbox from "../../../../../base/src/js/FsLightbox.vue";
import { testSources } from "<rootDir>/tests/__tests-services__/testVars";

export default {
    components: {
        FsLightbox
    },
    data() {
        return {
            testSources: testSources,
            slide: 2
        }
    }
}
</script>