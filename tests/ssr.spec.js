import Vue from 'vue';
import TestOpenLightbox from "./__tests-services__/test-lightbox/TestOpenLightbox.vue";
import { createRenderer } from "vue-server-renderer";

// simulating server behaviour - deleting window and document
delete global.window;
delete global.document;

test('ssr', () => {
    const renderer = createRenderer();
    expect(() => renderer.renderToString(new Vue(TestOpenLightbox))).not.toThrowError();
});
