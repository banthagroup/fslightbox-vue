<template>
    <div class="fslightbox-invalid-file-wrapper fslightbox-flex-centered">
        Invalid source
    </div>
</template>

<script>
    import { fsLightboxStore } from "../../../fsLightboxStore";
    import { FADE_IN_STRONG_CLASS_NAME } from "../../../constants/classes-names";

    export default {
        props: { fsLightboxIndex: Number, i: Number },
        mounted() {
            const {
                componentsServices: { hideLoaderCollection },
                elements: { sourceMainWrappers }
            } = fsLightboxStore[this.fsLightboxIndex];

            hideLoaderCollection[this.i]();
            sourceMainWrappers[this.i].classList.add(FADE_IN_STRONG_CLASS_NAME);
        }
    };
</script>
