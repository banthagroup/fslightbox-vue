import { renderComponentAndGetLightbox } from "<rootDir>/tests/__tests-services__/integration/renderComponentAndGetLightbox";
import ChangingPropsBeforeOpen
    from "../../../base/tests/__tests-services__/integration/components/ChangingPropsBeforeOpen.vue";

test('changing-slide-before-initialize', async () => {
    const componentVm = renderComponentAndGetLightbox(ChangingPropsBeforeOpen).vm;
    await document.getElementById('btn-update-props').dispatchEvent(new Event('click'));
    await document.getElementById('btn-toggler').dispatchEvent(new Event('click'));
    expect(document.querySelector('[data-test-id="slide-number"]').innerHTML).toBe('2');

    await componentVm.$destroy();
});