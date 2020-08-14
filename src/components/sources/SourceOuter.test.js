import { fsLightboxStore } from "../../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import SourceOuter from "./SourceOuter.vue";
import Loader from "../helpers/Loader.vue";

fsLightboxStore[2] = {
    elements: { sourcesOuters: [] },
    componentsServices: { hideLoaderCollection: [] }
};

test('SourceOuter', async () => {
    const sourceOuter = shallowMount(SourceOuter, {
        propsData: { fsLightboxIndex: 2, i: 1 }
    });
    expect(sourceOuter.vm.$children[0].$props).toEqual({ fsLightboxIndex: 2, i: 1 });
    expect(fsLightboxStore[2].elements.sourcesOuters[1]).toBe(sourceOuter.element);
    expect(sourceOuter.findComponent(Loader).exists()).toBe(true);

    await fsLightboxStore[2].componentsServices.hideLoaderCollection[1]();
    expect(sourceOuter.findComponent(Loader).exists()).toBe(false);
});
