<template>
    <component :is="Component" ref="ref"></component>
</template>

<script>
    import { fsLightboxStore } from "../../../fsLightboxStore";
    import { SOURCE_CLASS_NAME } from "../../../constants/classes-names";

    export default {
        props: { fsLightboxIndex: Number, i: Number },
        data() {
            return {
                Component: fsLightboxStore[this.fsLightboxIndex].props.customSources[this.i]
            }
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
