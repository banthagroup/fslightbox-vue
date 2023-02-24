<template>
    <component
        :js="component"
        v-bind="componentProps"
        ref="ref"
    />
</template>

<script>
import { a } from "../a";
import { SOURCE_CLASS_NAME } from "../cn/classes-names";

export default {
    props: { i: Number, j: Number },
    data() {
        const customSource = a[this.i].props.sources[this.j];
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
        } = a[this.i];

        sources[this.j] = this.$refs['ref'].$el;
        sources[this.j].classList.add(SOURCE_CLASS_NAME);
        sourceLoadHandlers[this.j].handleCustomLoad();
    }
};
</script>
