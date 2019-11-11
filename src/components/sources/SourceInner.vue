<template>
    <div ref="ref">
        <component
            v-if="sourceComponent && isSourceInStage"
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
            attachComponentDataToObject: function (object) {
                object.sourceComponent = fsLightboxStore[this.fsLightboxIndex].elements.sourcesComponents[this.i];
                object.isSourceInStage = fsLightboxStore[this.fsLightboxIndex].core.stageManager.isSourceInStage(this.i);
            }
        }
    }
</script>
