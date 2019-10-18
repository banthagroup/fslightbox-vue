<template>
    <div @click="onClick" :title="title" class="fslightbox-toolbar-button fslightbox-flex-centered">
        <Svger :size="size" :view-box="viewBox" :d="d"/>
    </div>
</template>

<script>
    import Svger from "../../helpers/Svger.vue";

    export default {
        components: { Svger },
        props: {
            onClick: Function,
            size: String,
            viewBox: String,
            d: String,
            title: String
        }
    }
</script>
