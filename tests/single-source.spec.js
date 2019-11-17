import { renderTestLightboxUsingComponent } from "./__tests-services__/test-lightbox/testLightbox";
import TestSingleSourceLightbox from "./__tests-services__/test-lightbox/TestSingleSourceLightbox";

jest.useFakeTimers();
renderTestLightboxUsingComponent(TestSingleSourceLightbox);

test('reopening lightbox', async () => {
    const toggler = document.getElementById('btn-toggler');

    // opening
    await toggler.dispatchEvent(new Event('click'));

    // closing
    await toggler.dispatchEvent(new Event('click'));
    await jest.runAllTimers();

    // reopening
    toggler.dispatchEvent(new Event('click'));
});
