<template>
    <div ref="ref">
        <component
            v-if="current === i || (!loadOnlyCurrentSource && isSourceInStage)"
            :is="sourceComponent"
            :fs-lightbox-index="fsLightboxIndex"
            :i="i"
        />
    </div>
</template>

<script>
    import { fsLightboxStore } from "../../fsLightboxStore";
    import Imager from "./proper-sources/Imager.vue";
    import Videor from "./proper-sources/Videor.vue";
    import Youtuber from "./proper-sources/Youtuber.vue";
    import Customer from "./proper-sources/Customer.vue";
    import Invalider from "./proper-sources/Invalider.vue";

    export default {
        props: { fsLightboxIndex: Number, i: Number },
        components: { Imager, Videor, Youtuber, Customer, Invalider },
        data() {
            const data = {};

            this.attachComponentDataToObject(data);

            return data;
        },
        created() {
            fsLightboxStore[this.fsLightboxIndex].componentsServices.updateSourceInnerCollection[this.i] = () => {
                this.attachComponentDataToObject(this);
            };
        },
        mounted() {
            fsLightboxStore[this.fsLightboxIndex].elements.sourcesInners[this.i] = this.$refs['ref'];
        },
        methods: {
            attachComponentDataToObject: function(object) {
                const {
                    core: { stageManager: { isSourceInStage } },
                    elements: { sourcesComponents },
                    props: { loadOnlyCurrentSource },
                    stageIndexes: { current }
                } = fsLightboxStore[this.fsLightboxIndex];

                object.sourceComponent = sourcesComponents[this.i];
                object.isSourceInStage = isSourceInStage(this.i);
                object.current = current;
                object.loadOnlyCurrentSource = loadOnlyCurrentSource;
            }
        }
    }
</script>
