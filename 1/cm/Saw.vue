<template>
    <div ref="a">
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
import I from "../I.vue";
import V from "../V.vue";
import Y from "../Y.vue";
import C from "../C.vue";
import In from "../In.vue";

export default {
    props: { fsLightboxIndex: Number, i: Number },
    components: { I,V,Y,C,In },
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
        a[this.fsLightboxIndex].saw[this.i] = this.$refs.a;
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
