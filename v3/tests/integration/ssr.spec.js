import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';
import BaseOpenedLightbox from "../../../base/tests/__tests-services__/components/BaseOpenedLightbox.vue";

// simulating server behaviour - deleting window and document
delete global.window;
delete global.document;

test('testing SSR here', () => {
    const app = createSSRApp(BaseOpenedLightbox);
    expect(() => renderToString(app)).not.toThrowError();
});