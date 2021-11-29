<template>
    <div class="fslightbox-toolbar">
        <FullscreenButton :fs-lightbox-index="fsLightboxIndex"/>
        <CloseButton :fs-lightbox-index="fsLightboxIndex"/>
    </div>
</template>

<script>
    import CloseButton from "./toolbar-buttons/CloseButton.vue";
    import FullscreenButton from "./toolbar-buttons/FullscreenButton.vue";

    export default {
        components: { FullscreenButton, CloseButton },
        props: { fsLightboxIndex: Number },
    }
</script>
