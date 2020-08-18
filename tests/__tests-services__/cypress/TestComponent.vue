<template>
    <div>
        <div v-for="(AppComponent, name) in testApps">
            <button :id="name" @click="app = name" />
            <component :is="AppComponent" />
        </div>
    </div>
</template>

<script>
import TestLightbox from "../test-lightbox/TestLightbox.vue";
import TestLightboxChangingPropValueBeforeInitialize
    from "../test-lightbox/TestLightboxChangingPropValueBeforeInitialize.vue";

export default {
    components: {
        TestLightboxChangingPropValueBeforeInitialize,
        TestLightbox
    },
    data: () => ({
        app: 'opening-lightbox-with-prop-changed-before-initialize',
        testApps: {
            'default': 'TestLightbox',
            'opening-lightbox-with-prop-changed-before-initialize': 'TestLightboxChangingPropValueBeforeInitialize'
        }
    })
}
</script>
