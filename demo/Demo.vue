<template>
    <FsLightbox
        :toggler="true"
        :custom-sources="['image', 'second']"
        :open-on-mount="true"
    />
</template>

<script>
    import FsLightbox from "../src/FsLightbox.vue";

    export default {
        components: { FsLightbox }
    }
</script>
