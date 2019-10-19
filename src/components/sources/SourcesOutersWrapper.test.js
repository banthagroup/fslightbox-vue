import { fsLightboxStore } from "../../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import SourcesOutersWrapper from "./SourcesOutersWrapper.vue";
import SourceOuter from "./SourceOuter.vue";

fsLightboxStore[1] = {
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
    expect(sourcesOutersWrapper.vm.$children[1].$options._componentTag).toBe('SourceOuter');
    expect(sourcesOutersWrapper.vm.$children[1].$props['fsLightboxIndex']).toBe(1);
    expect(sourcesOutersWrapper.vm.$children[2].$options._componentTag).toBe('SourceOuter');
    expect(sourcesOutersWrapper.vm.$children[2].$props['fsLightboxIndex']).toBe(1);
    expect(sourcesOutersWrapper.vm.$children[3].$options._componentTag).toBe('SourceOuter');
    expect(sourcesOutersWrapper.vm.$children[3].$props['fsLightboxIndex']).toBe(1);
});
