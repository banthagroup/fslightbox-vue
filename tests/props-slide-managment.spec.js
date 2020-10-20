import { renderTestLightboxUsingComponent } from "./__tests-services__/test-lightbox/renderTestLightboxUsingComponent";
import TestSlideChangingComponent from "./__tests-services__/test-lightbox/TestSlideChangingLightbox.vue";

jest.useFakeTimers();
renderTestLightboxUsingComponent(TestSlideChangingComponent);

test('props slide management', async () => {
    const btnFirstSlide = document.getElementById('btn-first-slide');
    const btnSecondSlide = document.getElementById('btn-second-slide');
    const btnThirdSlide = document.getElementById('btn-third-slide');
    const btnToggler = document.getElementById('btn-toggler');

    // opening lightbox with props on 2 slide
    await btnSecondSlide.dispatchEvent(new Event('click'));
    expect(document.getElementsByClassName('fslightbox-container')).toHaveLength(1);

    let sourceMainWrappers = document.querySelectorAll('[data-test-class="source-outer"]');
    expect(sourceMainWrappers[0].style.transform).toBe('translateX(-1400px)');
    expect(sourceMainWrappers[1].style.transform).toBe('translateX(0px)');
    expect(sourceMainWrappers[2].style.transform).toBe('translateX(-1400px)');
    expect(sourceMainWrappers[3].style.transform).toBe('translateX(-1400px)');
    expect(sourceMainWrappers[4].style.transform).toBe('translateX(-1400px)');

    // changing slide to 3 while lightbox open
    await btnThirdSlide.dispatchEvent(new Event('click'));
    jest.runAllTimers();
    expect(sourceMainWrappers[0].style.transform).toBe('translateX(-1400px)');
    expect(sourceMainWrappers[1].style.transform).toBe('translateX(-1400px)');
    expect(sourceMainWrappers[2].style.transform).toBe('translateX(0px)');
    expect(sourceMainWrappers[3].style.transform).toBe('translateX(-1400px)');
    expect(sourceMainWrappers[4].style.transform).toBe('translateX(-1400px)');

    // opening lightbox on slide 1 after closing
    await btnToggler.dispatchEvent(new Event('click'));
    await jest.runAllTimers();
    expect(document.getElementsByClassName('fslightbox-container')).toHaveLength(0);
    await btnFirstSlide.dispatchEvent(new Event('click'));
    sourceMainWrappers = document.querySelectorAll('[data-test-class="source-outer"]');
    expect(sourceMainWrappers[0].style.transform).toBe('translateX(0px)');
    expect(sourceMainWrappers[1].style.transform).toBe('translateX(-1400px)');
    expect(sourceMainWrappers[2].style.transform).toBe('translateX(-1400px)');
    expect(sourceMainWrappers[3].style.transform).toBe('translateX(-1400px)');
    expect(sourceMainWrappers[4].style.transform).toBe('translateX(-1400px)');
});
