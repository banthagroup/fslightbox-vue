import { fsLightboxStore } from "../../../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import Invalider from "./Invalider";
import { FADE_IN_STRONG_CLASS_NAME } from "../../../constants/classes-names";

fsLightboxStore[2] = {
    collections: { hideLoaderCollection: [null, jest.fn()] },
    elements: { sourcesOuters: [null, { classList: { add: jest.fn() } }] }
};

test('Invalider', () => {
    shallowMount(Invalider, {
        propsData: { fsLightboxIndex: 2, i: 1 }
    });

    expect(fsLightboxStore[2].collections.hideLoaderCollection[1]).toBeCalled();
    expect(fsLightboxStore[2].elements.sourcesOuters[1].classList.add).toBeCalledWith(FADE_IN_STRONG_CLASS_NAME);
});
