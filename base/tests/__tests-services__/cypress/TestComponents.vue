<template>
    <component-switcher :test-components="testComponents" />
</template>

<script>
import BaseOpenedLightbox from "../components/BaseOpenedLightbox.vue";
import ComponentSwitcher from "../components/ComponentSwitcher.vue";

export default {
    components: {
        ComponentSwitcher
    },
    data() {
        return {
            testComponents: {
                'BaseOpenedLightbox': BaseOpenedLightbox
            }
        }
    }
}
</script>
