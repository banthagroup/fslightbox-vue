import { renderComponentAndGetLightbox } from "<rootDir>/tests/__tests-services__/integration/renderComponentAndGetLightbox";
import ChangingPropsBeforeOpen
    from "../../../base/tests/__tests-services__/integration/components/ChangingPropsBeforeOpen.vue";

test('changing-slide-before-initialize', async () => {
    renderComponentAndGetLightbox(ChangingPropsBeforeOpen);
    await document.getElementById('btn-update-props').dispatchEvent(new Event('click'));
    await document.getElementById('btn-toggler').dispatchEvent(new Event('click'));
    expect(document.querySelector('[data-test-id="slide-number"]').innerHTML).toBe('2');
});