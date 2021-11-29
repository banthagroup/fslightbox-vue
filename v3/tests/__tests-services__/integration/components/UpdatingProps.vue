<template>
    <ComponentSwitcher :test-components="testComponents" />
</template>

<script>
import { shallowRef } from "vue";
import ComponentSwitcher from "../../../../../base/tests/__tests-services__/components/ComponentSwitcher.vue";
import UpdatingSlidePropLightboxOpened
    from "../../../../../base/tests/__tests-services__/integration/components/UpdatingSlidePropLightboxOpened.vue";
import UpdatingSlidePropLightboxClosed
    from "../../../../../base/tests/__tests-services__/integration/components/UpdatingSlidePropLightboxClosed.vue";
import UpdatingTogglerSlidePropDifferentThanStageIndex
    from "../../../../../base/tests/__tests-services__/integration/components/UpdatingTogglerSlidePropDifferentThanStageIndex.vue";
import UpdatingSlideAndTogglerProps
    from "../../../../../base/tests/__tests-services__/integration/components/UpdatingSlideAndTogglerProps.vue";

export default {
    components: {
        ComponentSwitcher
    },
    data() {
        return {
            testComponents: {
                'UpdatingSlidePropLightboxOpened': shallowRef(UpdatingSlidePropLightboxOpened),
                'UpdatingSlidePropLightboxClosed': shallowRef(UpdatingSlidePropLightboxClosed),
                'UpdatingTogglerSlidePropDifferentThanStageIndex': shallowRef(UpdatingTogglerSlidePropDifferentThanStageIndex),
                'UpdatingSlideAndTogglerProps': shallowRef(UpdatingSlideAndTogglerProps)
            }
        }
    }
}
</script>