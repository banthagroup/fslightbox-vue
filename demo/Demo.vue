<template>
    <FsLightbox
        :toggler="true"
        :custom-sources="['image', 'second']"
    />
</template>

<script>
    import FsLightbox from "../src/FsLightbox.vue";

    export default {
        components: { FsLightbox }
    }
</script>
