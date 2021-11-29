import { renderComponentAndGetLightbox } from "<rootDir>/tests/__tests-services__/integration/renderComponentAndGetLightbox";
import SingleSource from "../__tests-services__/integration/components/SingleSource.vue";

jest.useFakeTimers();
renderComponentAndGetLightbox(SingleSource);

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
