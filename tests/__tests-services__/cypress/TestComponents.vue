<template>
    <div>
        <div v-for="TestComponent in testComponents">
            <button :id="TestComponent" @click="currentComponent = TestComponent" />
            <component v-if="currentComponent === TestComponent" :is="TestComponent" />
        </div>
    </div>
</template>

<script>
import BaseOpenedLightbox from "../components/BaseOpenedLightbox.vue";

export default {
    components: {
        BaseOpenedLightbox
    },
    data() {
        return {
            currentComponent: null,
            testComponents: [
                'BaseOpenedLightbox'
            ]
        }
    }
}
</script>
