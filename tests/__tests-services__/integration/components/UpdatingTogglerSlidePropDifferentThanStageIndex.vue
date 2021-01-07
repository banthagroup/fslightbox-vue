<template>
    <div>
        <button id="btn-change-slide-via-keyboard" @click="() => pressButtonWithKey('ArrowRight')" />
        <button id="btn-close-lightbox" @click="() => pressButtonWithKey('Escape')" />
        <button id="btn-toggler" @click="toggler = !toggler" />

        <FsLightbox
            :toggler="toggler"
            :sources="testSources"
            :slide="2"
            :open-on-mount="true"
        />
    </div>
</template>

<script>
import FsLightbox from "../../../../src/FsLightbox.vue";
import { testSources } from "../../testVars";

export default {
    components: {
        FsLightbox
    },
    data() {
        return {
            toggler: false,
            testSources: testSources,
            sourceIndex: 1
        }
    },
    methods: {
        pressButtonWithKey(key) {
            const keydown = new KeyboardEvent('keydown', {
                key: key
            });
            document.dispatchEvent(keydown);
        }
    }
}
</script>