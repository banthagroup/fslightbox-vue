<template>
    <FsLightbox
            :toggler="true"
            :custom-sources="['image']"
    />
</template>

<script>
    import FsLightbox from "../src/FsLightbox.vue";

    export default {
        components: { FsLightbox }
    }
</script>
