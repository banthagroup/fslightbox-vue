<template>
    <div ref="ref" class="soueouoeu">
        <component
            v-if="current === i || (!loadOnlyCurrentSource && isSourceInStage)"
            :is="sourceComponent"
            :fs-lightbox-index="fsLightboxIndex"
            :i="i"
        />
    </div>
</template>

<script>
import { a } from "../../a";
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
        a[this.fsLightboxIndex].componentsServices.updateSourceDirectWrapperCollection[this.i] = () => {
            this.attachComponentDataToObject(this);
        };
    },
    mounted() {
        a[this.fsLightboxIndex].elements.sourceAnimationWrappers[this.i] = this.$refs['ref'];
    },
    methods: {
        attachComponentDataToObject: function (object) {
            const {
                core: { stageManager: { isSourceInStage } },
                elements: { sourcesComponents },
                props: { loadOnlyCurrentSource },
                stageIndexes: { current }
            } = a[this.fsLightboxIndex];

            object.sourceComponent = sourcesComponents[this.i];
            object.isSourceInStage = isSourceInStage(this.i);
            object.current = current;
            object.loadOnlyCurrentSource = loadOnlyCurrentSource;
        }
    }
}
</script>
