<template>
    <div>
        <button @click="toggler = !toggler">Toggle Lightbox</button>
        <button @click="openLightboxOnSlide(1)">Open on 1 slide</button>
        <button @click="openLightboxOnSlide(2)">Open on 2 slide</button>

        <FsLightbox
            :toggler="toggler"
            :videos-posters="[null, null]"
            :sources="testSources"
            :onInit="action"
            :disable-local-storage="true"
            :load-only-current-source="true"
            :custom-attributes="[
                {
                    alt: 'siema',
                    elo: 'dupas'
                },
                {
                    poster: 'supa-poster',
                    bombster: 'supa-bombster'
                },
                {
                    supaat: 'supa'
                }
            ]"
        />
    </div>
</template>

<script>
import ExampleCustom from "./ExampleCustom.vue";
import { testSources } from "../tests/__tests-services__/testVars";
import FsLightbox from "../src/FsLightbox.vue";

export default {
    components: {
        FsLightbox
    },
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
        openLightboxOnSlide: function (number) {
            this.toggler = !this.toggler;
        },
        action() {

        }
    }
}
</script>
