<template>
    <div>
        <button @click="toggler = !toggler">Toggle Lightbox</button>
        <button @click="openLightboxOnSlide(1)">Open on 1 slide</button>
        <button @click="openLightboxOnSlide(2)">Open on 2 slide</button>

        <FsLightbox
            :toggler="toggler"
            :sources="gallery.items"
            :slide="slide"
            :load-only-current-source="loadOnlyCurrentSource"
        />
    </div>
</template>

<script>
import ExampleCustom from "./ExampleCustom.vue";
import { testSources, testTypes } from "../tests/__tests-services__/testVars";
import FsLightbox from "../src/FsLightbox.vue";

export default {
    components: {
        FsLightbox
    },
    data() {
        return {
            toggler: false,
            ExampleCustom: ExampleCustom,
            galleryVisible: true,
            testTypes: testTypes,
            testSources: testSources,
            loadOnlyCurrentSource: false,
            gallery: {
                posts: testSources,
                items: []
            },
            category: {
                slug: null
            },
            slide: 2
        }
    },
    mounted() {
        this.showGallery(1);

        setTimeout(() => {
            // this.showGallery(1);
            //
            //     setTimeout(() => {
            //         this.toggler = !this.toggler;
            //
            //         setTimeout(() => {
            //             this.slide = 4;
            //             this.toggler = !this.toggler;
            //         }, 1000);
            //     }, 1000)
        }, 1000)
    },
    methods: {
        openLightboxOnSlide: function (number) {
            this.slide = number;
            this.toggler = !this.toggler;
        },
        async showGallery(idx) {
            this.gallery.items = this.gallery.posts.slice();
            this.loadOnlyCurrentSource = true;
            this.slide = 3;
            this.toggler = !this.toggler;
        }
    }
}
</script>
