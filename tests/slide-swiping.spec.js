import { testSources } from "./__tests-services__/testVars";
import FsLightbox from "../src/FsLightbox.vue";
import { mount } from "@vue/test-utils";
import SourceWrappersContainer from "../src/components/sources/SourceWrappersContainer.vue";
import { fsLightboxStore } from "../src/fsLightboxStore";
import { ANIMATION_TIME } from "../src/constants/css-constants";

jest.useFakeTimers();

const fsLightbox = mount(FsLightbox, {
    propsData: { sources: testSources, toggler: false, openOnMount: true }
});

const sourceWrappersContainer = fsLightbox.findComponent(SourceWrappersContainer);

let requestAnimationFrameCallback;
window.requestAnimationFrame = (callback) => {
    requestAnimationFrameCallback = callback;
};

const mousedown = new Event('mousedown');
const mousemove = new Event('mousemove');
const mouseup = new Event('mouseup');

test('siema', () => {

})

/*
test('slide swiping', async () => {
    // previous
    mousedown.clientX = 100;
    sourceWrappersContainer.element.dispatchEvent(mousedown);

    mousemove.clientX = 200;
    document.dispatchEvent(mousemove);

    document.dispatchEvent(mouseup);
    jest.advanceTimersByTime(ANIMATION_TIME);

    expect(fsLightboxStore[0].stageIndexes).toEqual({
        previous: 2,
        current: 3,
        next: 0
    });

    // next
    mousedown.clientX = 1000;
    sourceWrappersContainer.element.dispatchEvent(mousedown);

    requestAnimationFrameCallback();

    mousemove.clientX = 500;
    document.dispatchEvent(mousemove);

    document.dispatchEvent(mouseup);
    jest.advanceTimersByTime(ANIMATION_TIME);

    expect(fsLightboxStore[0].stageIndexes).toEqual({
        previous: 3,
        current: 0,
        next: 1
    });

    // closing
    mousedown.clientX = 333;
    sourceWrappersContainer.element.dispatchEvent(mousedown);

    requestAnimationFrameCallback();

    mousemove.clientX = 333;
    document.dispatchEvent(mousemove);

    document.dispatchEvent(mouseup);
    await jest.advanceTimersByTime(ANIMATION_TIME - 30);

    expect(fsLightboxStore[0].stageIndexes).toEqual({
        previous: 3,
        current: 0,
        next: 1
    });
    expect(fsLightbox.html()).toBeFalsy();
});
*/