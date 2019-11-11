import Vue from 'vue';
import TestOpenComponent from "./__tests-services__/test-lightbox/TestOpenComponent.vue";
import { createRenderer } from "vue-server-renderer";

// simulating server behaviour - deleting window and document
delete global.window;
delete global.document;

test('ssr', async () => {
    const renderer = createRenderer();
    renderer.renderToString(new Vue(TestOpenComponent), (error, html) => {
        expect(html).toContain('fslightbox-container');
    });
});
