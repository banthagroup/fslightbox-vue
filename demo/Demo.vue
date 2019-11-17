<template>
    <div>
        <button @click="toggler = !toggler">Toggle Lightbox</button>
        <button @click="openLightboxOnSlide(1)">Open on 1 slide</button>
        <button @click="openLightboxOnSlide(2)">Open on 2 slide</button>

        <FsLightbox
            :toggler="toggler"
            :slide="slide"
            :sources="testSources"
            :videos-posters="[null, '/demo/img/1.jpeg']"
            :custom-sources="[null, null, null, null, { component: Custom, props: {firstProp: 'oejoej', secondProp: 'oaeuaoeu'}}]"
            :onInit="action"
        />
    </div>
</template>

<script>
    import FsLightbox from "../src/FsLightbox.vue";
    import Custom from "../tests/__tests-services__/test-lightbox/TestCustomSourceWithProps.vue";
    import { testSources } from "../tests/__tests-services__/testVars";

    export default {
        components: { FsLightbox },
        data() {
            return {
                Custom: Custom,
                toggler: false,
                slide: 1,
                testSources: testSources
            }
        },
        methods: {
            openLightboxOnSlide: function (number) {
                this.slide = number;
                this.toggler = !this.toggler;
            },
            action() {
                console.log(1);
            }
        }
    }
</script>
