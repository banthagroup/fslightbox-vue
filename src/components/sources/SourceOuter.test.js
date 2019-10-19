import { fsLightboxStore } from "../../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import SourceOuter from "./SourceOuter.vue";
import Loader from "../helpers/Loader.vue";

fsLightboxStore[2] = {
    elements: { sourcesOuters: [] },
    componentsServices: { isSourceLoadedManagersCollection: [] }
};

test('SourceOuter', () => {
    const sourceOuter = shallowMount(SourceOuter, {
        propsData: { fsLightboxIndex: 2, i: 1 }
    });
    expect(sourceOuter.vm.$children[0].$props).toEqual({ fsLightboxIndex: 2, i: 1 });
    expect(sourceOuter.contains(Loader)).toBe(true);

    fsLightboxStore[2].componentsServices.isSourceLoadedManagersCollection[1].set(true);
    expect(sourceOuter.contains(Loader)).toBe(false);
});
