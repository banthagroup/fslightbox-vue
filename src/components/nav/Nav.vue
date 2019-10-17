<template>
    <div ref="nav" class="fslightbox-nav">
        <Toolbar :fs-lightbox-index="this.fsLightboxIndex"/>
        <SlideNumber/>
    </div>
</template>

<script>
    import Toolbar from "./Toolbar.vue";
    import SlideNumber from "./SlideNumber.vue";

    export default {
        components: { SlideNumber, Toolbar },
        props: { fsLightboxIndex: Number }
    };
</script>
