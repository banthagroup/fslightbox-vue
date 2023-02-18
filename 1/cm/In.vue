<template>
    <div class="fslightbox-invalid-file-wrapper fslightbox-flex-centered">
        Invalid source
    </div>
</template>

<script>
    import { a } from "../a";
    import { FADE_IN_STRONG_CLASS_NAME } from "../cn/classes-names";

    export default {
        props: { fsLightboxIndex: Number, i: Number },
        mounted() {
            const {
                componentsServices: { hideSourceLoaderCollection },
                elements: { sourceMainWrappers }
            } = a[this.fsLightboxIndex];

            hideSourceLoaderCollection[this.i]();
            sourceMainWrappers[this.i].classList.add(FADE_IN_STRONG_CLASS_NAME);
        }
    };
</script>
