<template>
    <component
        :is="component"
        v-bind="componentProps"
        ref="ref"
    />
</template>

<script>
import { a } from "../a";
import { SOURCE_CLASS_NAME } from "../cn/classes-names";

export default {
    props: { fsLightboxIndex: Number, i: Number },
    data() {
        const customSource = a[this.fsLightboxIndex].props.sources[this.i];
        const data = { component: customSource, componentProps: {} };

        if (customSource.component) {
            data.component = customSource.component;
            data.componentProps = customSource.props;
        }

        return data;
    },
    mounted() {
        const {
            collections: { sourceLoadHandlers },
            elements: { sources }
        } = a[this.fsLightboxIndex];

        sources[this.i] = this.$refs['ref'].$el;
        sources[this.i].classList.add(SOURCE_CLASS_NAME);
        sourceLoadHandlers[this.i].handleCustomLoad();
    }
};
</script>
