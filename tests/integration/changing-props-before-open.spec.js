import { renderComponentAndGetLightbox } from "../__tests-services__/integration/renderComponentAndGetLightbox";
import ChangingPropsBeforeOpen
    from "../__tests-services__/integration/components/ChangingPropsBeforeOpen";

test('changing-slide-before-initialize', async () => {
    await renderComponentAndGetLightbox(ChangingPropsBeforeOpen);
    await document.getElementById('btn-update-props').dispatchEvent(new Event('click'));
    await document.getElementById('btn-toggler').dispatchEvent(new Event('click'));
    expect(document.querySelector('[data-test-id="slide-number"]').innerHTML).toBe('2');
});