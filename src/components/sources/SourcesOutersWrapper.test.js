import { fsLightboxStore } from "../../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import SourcesOutersWrapper from "./SourcesOutersWrapper.vue";
import SourceOuter from "./SourceOuter.vue";

fsLightboxStore[1] = {
    core: { slideSwipingDown: { listener: jest.fn() } },
    data: { sourcesCount: 4 },
    elements: {
        sourcesOutersWrapper: null
    }
};

test('SourcesOutersWrapper', () => {
    const sourcesOutersWrapper = shallowMount(SourcesOutersWrapper, {
        propsData: { fsLightboxIndex: 1 }
    });

    expect(fsLightboxStore[1].elements.sourcesOutersWrapper).toBe(sourcesOutersWrapper.element);
    expect(sourcesOutersWrapper.vm.$children.length).toBe(4);
    expect(sourcesOutersWrapper.vm.$children[0].$options._componentTag).toBe('SourceOuter');
    expect(sourcesOutersWrapper.vm.$children[0].$props['fsLightboxIndex']).toBe(1);
    expect(sourcesOutersWrapper.vm.$children[0].$props['i']).toBe(0);
    expect(sourcesOutersWrapper.vm.$children[1].$options._componentTag).toBe('SourceOuter');
    expect(sourcesOutersWrapper.vm.$children[1].$props['fsLightboxIndex']).toBe(1);
    expect(sourcesOutersWrapper.vm.$children[1].$props['i']).toBe(1);
    expect(sourcesOutersWrapper.vm.$children[2].$options._componentTag).toBe('SourceOuter');
    expect(sourcesOutersWrapper.vm.$children[2].$props['fsLightboxIndex']).toBe(1);
    expect(sourcesOutersWrapper.vm.$children[2].$props['i']).toBe(2);
    expect(sourcesOutersWrapper.vm.$children[3].$options._componentTag).toBe('SourceOuter');
    expect(sourcesOutersWrapper.vm.$children[3].$props['fsLightboxIndex']).toBe(1);
    expect(sourcesOutersWrapper.vm.$children[3].$props['i']).toBe(3);

    const mousedown = new Event('mousedown');
    const touchstart = new Event('touchstart');
    expect(sourcesOutersWrapper.element.dispatchEvent(mousedown));
    expect(fsLightboxStore[1].core.slideSwipingDown.listener).toBeCalledWith(mousedown);
    expect(sourcesOutersWrapper.element.dispatchEvent(touchstart));
    expect(fsLightboxStore[1].core.slideSwipingDown.listener).toBeCalledWith(touchstart);
});
