<template>
    <FsLightbox
        :toggler="true"
        :sources="['https://i.imgur.com/Ys15LQF.jpg', null, 'invalid']"
        :custom-sources="[null, Custom]"
        :open-on-mount="true"
    />
</template>

<script>
    import FsLightbox from "../src/FsLightbox.vue";
    import Custom from "./ExampleCustom.vue";

    export default {
        components: { FsLightbox, Custom },
        data() {
            return {
                Custom: Custom
            }
        }
    }
</script>
