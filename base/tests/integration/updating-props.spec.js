import { renderComponentAndGetLightbox } from "<rootDir>/tests/__tests-services__/integration/renderComponentAndGetLightbox";
import UpdatingProps from "<rootDir>/tests/__tests-services__/integration/components/UpdatingProps.vue";

/*
For some reason running all tests, not only this test causes error that pops up after test run successfully.
Vue is tear downed, while XHR request comes and breaks everything probably.
Maybe this is triggered by how long this test lasts.
 */
Object.defineProperty(window, 'XMLHttpRequest', {
    value: () => ({
        open: () => {},
        send: () => {}
    })
});

renderComponentAndGetLightbox(UpdatingProps);

describe('slide change', () => {
    test('lightbox opened', async () => {
        await document.getElementById('UpdatingSlidePropLightboxOpened').dispatchEvent(new Event('click'));

        await document.getElementById('btn-update-slide').dispatchEvent(new Event('click'));
        expect(getSlideNumber()).toBe(3);
    });

    test('lightbox closed', async () => {
        await document.getElementById('UpdatingSlidePropLightboxClosed').dispatchEvent(new Event('click'));

        await document.getElementById('btn-update-slide').dispatchEvent(new Event('click'));
        await document.getElementById('btn-toggler').dispatchEvent(new Event('click'));
        expect(getSlideNumber()).toBe(3);
    });
});

describe('toggler change', () => {
    test('slide prop is different than stage index', async () => {
        await document.getElementById('UpdatingTogglerSlidePropDifferentThanStageIndex').dispatchEvent(new Event('click'));

        await document.getElementById('btn-change-slide-via-keyboard').dispatchEvent(new Event('click'));
        await document.getElementById('btn-close-lightbox').dispatchEvent(new Event('click'));
        await document.getElementById('btn-toggler').dispatchEvent(new Event('click'));
        expect(getSlideNumber()).toBe(2);
    });
});

test('slide and toggler change', async () => {
    await document.getElementById('UpdatingSlideAndTogglerProps').dispatchEvent(new Event('click'));

    await document.getElementById('btn-update-slide-and-toggler').dispatchEvent(new Event('click'));
    expect(getSlideNumber()).toBe(3);
});

function getSlideNumber() {
    return parseInt(document.querySelector('[data-test-id="slide-number"]').innerHTML);
}
