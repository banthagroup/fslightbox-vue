<template>
    <component
        :is="component"
        v-bind="componentProps"
        ref="ref"
    />
</template>

<script>
import { fsLightboxStore } from "../../../fsLightboxStore";
import { SOURCE_CLASS_NAME } from "../../../constants/classes-names";

export default {
    props: { fsLightboxIndex: Number, i: Number },
    data() {
        const customSource = fsLightboxStore[this.fsLightboxIndex].props.sources[this.i];
        const data = { component: customSource, componentProps: {} };

        if (customSource.component) {
            data.component = customSource.component;
            data.componentProps = customSource.props;
        }

        return data;
    },
    mounted() {
        const {
            collections: { sourcesLoadsHandlers },
            elements: { sources }
        } = fsLightboxStore[this.fsLightboxIndex];

        sources[this.i] = this.$refs['ref'].$el;
        sources[this.i].classList.add(SOURCE_CLASS_NAME);
        sourcesLoadsHandlers[this.i].handleCustomLoad();
    }
};
</script>
