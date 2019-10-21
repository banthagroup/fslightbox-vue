<template>
    <FsLightbox
        :toggler="toggler"
        :sources="testSources"
        :custom-sources="[null, null, null, null, Custom]"
        :open-on-mount="true"
    />
</template>

<script>
    import FsLightbox from "../src/FsLightbox.vue";
    import Custom from "./ExampleCustom.vue";
    import { testSources } from "../tests/__tests-services__/testVars";

    export default {
        components: { FsLightbox, Custom },
        data() {
            return {
                Custom: Custom,
                toggler: false,
                testSources: testSources
            }
        },
        created() {
            // setInterval(() => {
            //     this.toggler = !this.toggler;
            // }, 2000);
        }
    }
</script>
