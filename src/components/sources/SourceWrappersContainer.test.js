import { fsLightboxStore } from "../../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import SourceWrappersContainer from "./SourceWrappersContainer.vue";

fsLightboxStore[1] = {
    core: { slideSwipingDown: { listener: jest.fn() } },
    elements: {
        sourceWrappersContainer: null
    },
    props: { sources: { length: 4 } }
};

test('SourceWrappersContainer', () => {
    const sourceWrappersContainer = shallowMount(SourceWrappersContainer, {
        propsData: { fsLightboxIndex: 1 }
    });

    expect(fsLightboxStore[1].elements.sourceWrappersContainer).toBe(sourceWrappersContainer.element);
    expect(sourceWrappersContainer.vm.$children.length).toBe(4);
    expect(sourceWrappersContainer.vm.$children[0].$options._componentTag).toBe('SourceMainWrapper');
    expect(sourceWrappersContainer.vm.$children[0].$props['fsLightboxIndex']).toBe(1);
    expect(sourceWrappersContainer.vm.$children[0].$props['i']).toBe(0);
    expect(sourceWrappersContainer.vm.$children[1].$options._componentTag).toBe('SourceMainWrapper');
    expect(sourceWrappersContainer.vm.$children[1].$props['fsLightboxIndex']).toBe(1);
    expect(sourceWrappersContainer.vm.$children[1].$props['i']).toBe(1);
    expect(sourceWrappersContainer.vm.$children[2].$options._componentTag).toBe('SourceMainWrapper');
    expect(sourceWrappersContainer.vm.$children[2].$props['fsLightboxIndex']).toBe(1);
    expect(sourceWrappersContainer.vm.$children[2].$props['i']).toBe(2);
    expect(sourceWrappersContainer.vm.$children[3].$options._componentTag).toBe('SourceMainWrapper');
    expect(sourceWrappersContainer.vm.$children[3].$props['fsLightboxIndex']).toBe(1);
    expect(sourceWrappersContainer.vm.$children[3].$props['i']).toBe(3);

    const mousedown = new Event('mousedown');
    const touchstart = new Event('touchstart');
    expect(sourceWrappersContainer.element.dispatchEvent(mousedown));
    expect(fsLightboxStore[1].core.slideSwipingDown.listener).toBeCalledWith(mousedown);
    expect(sourceWrappersContainer.element.dispatchEvent(touchstart));
    expect(fsLightboxStore[1].core.slideSwipingDown.listener).toBeCalledWith(touchstart);
});
