<template>
    <div class="fslightbox-toolbar">
        <FullscreenButton :i="i"/>
        <CloseButton :i="i"/>
    </div>
</template>

<script>
    import CloseButton from "./toolbar-buttons/CloseButton.vue";
    import FullscreenButton from "./toolbar-buttons/FullscreenButton.vue";

    export default {
        components: { FullscreenButton, CloseButton },
        props: { i: Number },
    }
</script>
