<template>
    <div>
        <button @click="toggler = !toggler">Toggle Lightbox</button>
        <button @click="openLightboxOnSlide(1)">Open on 1 slide</button>
        <button @click="openLightboxOnSlide(2)">Open on 2 slide</button>

        <FsLightbox
            :toggler="toggler"
            :sources="sources"
            :slide="slide"
            :onClose="onClose"
            :custom-attributes="[
                {
                    srcSet: '/demo/img/7.jpg 600w, /demo/img/5.jpg 1200w',
                    sizes: '(max-width: 600px) 600px, 1200px',
                },
                {
                    poster: '/demo/img/7.jpg'
                }
            ]"
        />
    </div>
</template>

<script>
import { testSources } from "../tests/__tests-services__/testVars";
import FsLightbox from "../src/FsLightbox.vue";

export default {
    components: {
        FsLightbox
    },
    data() {
        return {
            toggler: false,
            sources: testSources,
            slide: 1
        }
    },
    methods: {
        openLightboxOnSlide: function (number) {
            this.slide = number;
            this.toggler = !this.toggler;
        },
        onClose() {
            console.log('close')
        }
    }
}
</script>
