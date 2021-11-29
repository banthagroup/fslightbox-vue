import Vue from 'vue';
import BaseOpenedLightbox from "../../../base/tests/__tests-services__/components/BaseOpenedLightbox.vue";
import { createRenderer } from "vue-server-renderer";

// simulating server behaviour - deleting window and document
delete global.window;
delete global.document;

test('ssr', () => {
    const renderer = createRenderer();
    // as lightbox is rendering at open not at mount we cannot test lightbox HTML, only if it does not throw error
    expect(() => renderer.renderToString(new Vue(BaseOpenedLightbox))).not.toThrowError();
});
