<template>
    <ComponentSwitcher :test-components="testComponents" />
</template>

<script>
import ComponentSwitcher from "../../components/ComponentSwitcher.vue";
import UpdatingSlidePropLightboxOpened from "./UpdatingSlidePropLightboxOpened.vue";
import UpdatingSlidePropLightboxClosed from "./UpdatingSlidePropLightboxClosed.vue";
import UpdatingTogglerSlidePropDifferentThanStageIndex from "./UpdatingTogglerSlidePropDifferentThanStageIndex.vue";
import UpdatingSlideAndTogglerProps from "./UpdatingSlideAndTogglerProps.vue";

export default {
    components: {
        ComponentSwitcher
    },
    data() {
        return {
            testComponents: {
                'UpdatingSlidePropLightboxOpened': UpdatingSlidePropLightboxOpened,
                'UpdatingSlidePropLightboxClosed': UpdatingSlidePropLightboxClosed,
                'UpdatingTogglerSlidePropDifferentThanStageIndex': UpdatingTogglerSlidePropDifferentThanStageIndex,
                'UpdatingSlideAndTogglerProps': UpdatingSlideAndTogglerProps
            }
        }
    }
}
</script>