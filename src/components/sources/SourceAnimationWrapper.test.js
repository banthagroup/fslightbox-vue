import { fsLightboxStore } from "../../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import SourceAnimationWrapper from "./SourceAnimationWrapper.vue";
import Videor from "./proper-sources/Videor.vue";

fsLightboxStore[2] = {
    componentsServices: { updateSourceDirectWrapperCollection: [] },
    core: { stageManager: { isSourceInStage: jest.fn(() => true) } },
    elements: {
        sourceAnimationWrappers: [],
        sourcesComponents: [undefined, 'Videor']
    },
    props: { loadOnlyCurrentSource: true },
    stageIndexes: { current: 0 }
};

test('SourceAnimationWrapper', async () => {
    const sourceAnimationWrapper = shallowMount(SourceAnimationWrapper, {
        propsData: {
            fsLightboxIndex: 2,
            i: 1
        }
    });

    const assertSourceNotRendered = () => {
        expect(fsLightboxStore[2].elements.sourceAnimationWrappers[1]).toBe(sourceAnimationWrapper.element);
        expect(sourceAnimationWrapper.vm.$children.length).toBe(0);
    };

    assertSourceNotRendered();

    await fsLightboxStore[2].componentsServices.updateSourceDirectWrapperCollection[1]();
    assertSourceNotRendered();

    fsLightboxStore[2].core.stageManager.isSourceInStage = () => true;
    await fsLightboxStore[2].componentsServices.updateSourceDirectWrapperCollection[1]();
    assertSourceNotRendered();

    fsLightboxStore[2].props.loadOnlyCurrentSource = false;
    await fsLightboxStore[2].componentsServices.updateSourceDirectWrapperCollection[1]();
    expect(sourceAnimationWrapper.vm.$children.length).toBe(1);
    expect(sourceAnimationWrapper.findComponent(Videor).exists()).toBe(true);
    expect(sourceAnimationWrapper.vm.$children[0].$props).toEqual({
        fsLightboxIndex: 2,
        i: 1
    });
});
