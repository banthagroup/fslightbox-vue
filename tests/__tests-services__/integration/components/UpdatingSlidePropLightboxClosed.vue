<template>
    <div>
        <button id="btn-toggler" @click="toggler = !toggler" />
        <button id="btn-update-slide" @click="sourceIndex = 2" />

        <FsLightbox
            :toggler="toggler"
            :sources="testSources"
            :source-index="sourceIndex"
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
            toggler: false,
            testSources: testSources,
            sourceIndex: 1
        }
    }
}
</script>