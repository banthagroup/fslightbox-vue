<template>
    <div>
        <button id="btn-toggler" @click="toggler = !toggler">Toggle Lightbox</button>

        <FsLightbox
            :toggler="toggler"
            :sources="[TEST_IMAGE_URL]"
        />
    </div>
</template>

<script>
import FsLightbox from "../../../../../base/src/js/FsLightbox.vue";
import { TEST_IMAGE_URL } from "<rootDir>/tests/__tests-services__/testVars";

export default {
    components: { FsLightbox },
    data() {
        return {
            toggler: false,
            TEST_IMAGE_URL: TEST_IMAGE_URL
        }
    }
}
</script>
