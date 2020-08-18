<template>
    <div>
        <button id="toggler" @click="toggleLightbox">
            Toggle
        </button>
        <fs-lightbox
            :toggler="toggler"
            :sources="[
                'https://i.imgur.com/fsyrScY.jpg',
                'https://www.youtube.com/watch?v=xshEZzpS4CQ',
                'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                TestCustom,
                'invalid'
            ]"
        />
    </div>
</template>

<script>
import FsLightbox from '../../../src/FsLightbox.vue';
import TestCustom from '../TestCustom.vue'

export default {
    components: {
        FsLightbox
    },
    data: () => ({
        toggler: false,
        TestCustom: TestCustom
    }),
    methods: {
        toggleLightbox() {
            this.toggler = !this.toggler;
        }
    }
}
</script>
