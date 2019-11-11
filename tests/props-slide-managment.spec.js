import { renderTestLightboxUsingComponent } from "./__tests-services__/test-lightbox/testLightbox";
import TestSlideChangingComponent from "./__tests-services__/test-lightbox/TestSlideChangingComponent.vue";

jest.useFakeTimers();
const fsLightbox = renderTestLightboxUsingComponent(TestSlideChangingComponent);

test('props slide management', async () => {
    const btnFirstSlide = document.getElementById('btn-first-slide');
    const btnSecondSlide = document.getElementById('btn-second-slide');
    const btnThirdSlide = document.getElementById('btn-third-slide');

    // opening lightbox with props on 2 slide
    await btnSecondSlide.dispatchEvent(new Event('click'));
    expect(document.getElementsByClassName('fslightbox-container')).toHaveLength(1);

    const sourcesOuters = document.getElementsByClassName('fslightbox-source-outer');
    expect(sourcesOuters[0].style.transform).toBe('translateX(-1400px)');
    expect(sourcesOuters[1].style.transform).toBe('translateX(0px)');
    expect(sourcesOuters[2].style.transform).toBe('translateX(-1400px)');
    expect(sourcesOuters[3].style.transform).toBe('translateX(-1400px)');
    expect(sourcesOuters[4].style.transform).toBe('translateX(-1400px)');

    // changing slide to 3 while lightbox open
    await btnThirdSlide.dispatchEvent(new Event('click'));
    jest.runAllTimers();
    expect(sourcesOuters[0].style.transform).toBe('translateX(-1400px)');
    expect(sourcesOuters[1].style.transform).toBe('translateX(-1400px)');
    expect(sourcesOuters[2].style.transform).toBe('translateX(0px)');
    expect(sourcesOuters[3].style.transform).toBe('translateX(-1400px)');
    expect(sourcesOuters[4].style.transform).toBe('translateX(-1400px)');

    fsLightbox.core.lightboxCloser.close();
    await jest.runAllTimers();
    expect(document.getElementsByClassName('fslightbox-container')).toHaveLength(0);

    // opening lightbox on slide 1 after closing
    await btnFirstSlide.dispatchEvent(new Event('click'));
    expect(sourcesOuters[0].style.transform).toBe('translateX(0px)');
    expect(sourcesOuters[1].style.transform).toBe('translateX(-1400px)');
    expect(sourcesOuters[2].style.transform).toBe('translateX(-1400px)');
    expect(sourcesOuters[3].style.transform).toBe('translateX(-1400px)');
    expect(sourcesOuters[4].style.transform).toBe('translateX(-1400px)');
});
