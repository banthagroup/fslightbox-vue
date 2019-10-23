import { fsLightboxStore } from "../../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import SourceInner from "./SourceInner";
import Videor from "./proper-sources/Videor.vue";

fsLightboxStore[2] = {
    componentsServices: {
        setSourceComponentCollection: []
    },
    elements: {
        sourcesInners: [],
        sourcesComponents: []
    }
};

test('SourceInner', () => {
    const sourceInner = shallowMount(SourceInner, {
        propsData: {
            fsLightboxIndex: 2,
            i: 1
        }
    });

    expect(fsLightboxStore[2].elements.sourcesInners[1]).toBe(sourceInner.element);
    expect(sourceInner.vm.$children.length).toBe(0);

    fsLightboxStore[2].componentsServices.setSourceComponentCollection[1]('Videor');
    expect(sourceInner.vm.$children.length).toBe(1);
    expect(sourceInner.contains(Videor)).toBe(true);
    expect(sourceInner.vm.$children[0].$props).toEqual({
        fsLightboxIndex: 2,
        i: 1
    });
});
