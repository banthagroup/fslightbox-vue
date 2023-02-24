<template>
    <div ref="a">
	<div v-if="!isl" class="fslightboxl"><div/><div/><div/><div/></div>
        <component
            v-if="current === i || (!loadOnlyCurrentSource && ist)"
            :is="sourceComponent"
            :fs-lightbox-index="fsLightboxIndex"
            :i="i"
        />
    </div>
</template>

<script>
import { a } from "../a";
import I from "./I.vue";
import V from "./V.vue";
import Y from "./Y.vue";
import C from "./C.vue";
import In from "./In.vue";
	
export default {
    props: { fsLightboxIndex: Number, i: Number },
    components: { I,V,Y,C,In },
    data() {
        const data = {};

        this.attachComponentDataToObject(data);

        return data;
    },
    created() {
        a[this.fsLightboxIndex].sawu[this.i] = () => {
            this.attachComponentDataToObject(this)
        }
    },
    mounted() {
        a[this.fsLightboxIndex].saw[this.i] = this.$refs.a;
    },
    methods: {
        attachComponentDataToObject: function (object) {
            const {
                elements: { sourcesComponents },
		isl,
                props: { loadOnlyCurrentSource },
		st,
                stageIndexes: { current }
            } = a[this.fsLightboxIndex];

            object.sourceComponent = sourcesComponents[this.i];
	    object.isl = isl[this.i];
            object.ist = st.i(this.i);
            object.current = current;
            object.loadOnlyCurrentSource = loadOnlyCurrentSource;
        }
    }
}
</script>
