<template>
    <div class="fslightbox-slide-number-container fslightbox-flex-centered">
        <div>{{ slide }}</div>
        <div class="fslightbox-slash"></div>
        <div>{ sourcesCount }</div>
    </div>
</template>

<script>
    import { fsLightboxStore } from "../../fsLightboxStore";

    export default {
        props: { fsLightboxIndex: Number },
        data() {
            return {
                slide: fsLightboxStore[this.fsLightboxIndex].stageIndexes.current + 1
            }
        }
    }
</script>
