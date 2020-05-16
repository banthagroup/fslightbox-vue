<template>
    <div>
        <button @click="toggler = !toggler">Toggle Lightbox</button>
        <button @click="openLightboxOnSlide(1)">Open on 1 slide</button>
        <button @click="openLightboxOnSlide(2)">Open on 2 slide</button>

        <FsLightbox
            :toggler="toggler"
            :slide="slide"
            :videos-posters="[null, '/demo/img/1.jpeg']"
            :sources="['img']"
            :onInit="action"
            :disable-local-storage="true"
            :load-only-current-source="true"
        />
    </div>
</template>

<script>
    import ExampleCustom from "./ExampleCustom.vue";
    import { testSources } from "../tests/__tests-services__/testVars";

    export default {
        components: { FsLightbox: () => import('fslightbox-vue') },
        data() {
            testSources.push({ component: ExampleCustom, props: { siema: 'jd' } });

            return {
                ExampleCustom: ExampleCustom,
                toggler: false,
                slide: 1,
                testSources: testSources
            }
        },
        methods: {
            openLightboxOnSlide: function(number) {
                this.slide = number;
                this.toggler = !this.toggler;
            },
            action() {

            }
        }
    }
</script>
