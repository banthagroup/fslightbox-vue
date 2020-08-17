import TestLightboxWithNoSourcesAtMount from "./__tests-services__/test-lightbox/TestLightboxWithNoSourcesAtMount.vue";
import { renderTestLightboxUsingComponent } from "./__tests-services__/test-lightbox/testLightbox";
import { testSources } from "./__tests-services__/testVars";

describe('mounting lightbox with empty array as sources, setting up sources that are state and then opening lightbox', () => {
    it('should initialize lightbox after first open so new sources should be taken instead of empty array', async () => {
        const lightbox = await renderTestLightboxUsingComponent(TestLightboxWithNoSourcesAtMount);
        await document.getElementById('btn-set-up-sources').dispatchEvent(new Event('click'));
        await document.getElementById('btn-open-lightbox').dispatchEvent(new Event('click'));
        expect(lightbox.data.sources).toEqual(testSources);
    });
});