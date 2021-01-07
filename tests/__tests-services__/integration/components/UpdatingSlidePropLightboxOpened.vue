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
import FsLightbox from "../../../../src/FsLightbox.vue";
import { testSources } from "../../testVars";

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