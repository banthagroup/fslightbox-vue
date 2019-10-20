<template>
    <div ref="ref">
        <component
            v-if="sourceComponent"
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
    import Customer from "./proper-sources/Customer.vue";

    export default {
        props: { fsLightboxIndex: Number, i: Number },
        components: { Imager, Videor, Customer },
        data() {
            return {
                sourceComponent: null
            }
        },
        created() {
            fsLightboxStore[this.fsLightboxIndex].componentsServices.setSourceComponentCollection[this.i] = (sourceComponent) => {
                this.sourceComponent = sourceComponent;
            };
        },
        mounted() {
            fsLightboxStore[this.fsLightboxIndex].elements.sourcesInners[this.i] = this.$refs['ref'];
        }
    }
</script>
