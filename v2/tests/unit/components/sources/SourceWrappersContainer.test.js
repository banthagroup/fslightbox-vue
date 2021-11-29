import { shallowMount } from "@vue/test-utils";
import { fsLightboxStore } from "../../../../../base/src/js/fsLightboxStore";
import SourceWrappersContainer
    from "../../../../../base/src/js/components/sources/SourceWrappersContainer.vue";
import SourceMainWrapper from "../../../../../base/src/js/components/sources/SourceMainWrapper.vue";

fsLightboxStore[1] = {
    core: { sourcesPointerDown: { listener: jest.fn() } },
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
    const sourceMainWrappers = sourceWrappersContainer.findAllComponents(SourceMainWrapper);
    expect(sourceMainWrappers.length).toBe(4);
    expect(sourceMainWrappers.at(0).props()['fsLightboxIndex']).toBe(1);
    expect(sourceMainWrappers.at(0).props()['i']).toBe(0);
    expect(sourceMainWrappers.at(1).props()['fsLightboxIndex']).toBe(1);
    expect(sourceMainWrappers.at(1).props()['i']).toBe(1);
    expect(sourceMainWrappers.at(2).props()['fsLightboxIndex']).toBe(1);
    expect(sourceMainWrappers.at(2).props()['i']).toBe(2);
    expect(sourceMainWrappers.at(3).props()['fsLightboxIndex']).toBe(1);
    expect(sourceMainWrappers.at(3).props()['i']).toBe(3);
});
