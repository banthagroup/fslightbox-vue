import { fsLightboxStore } from "../../../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import Imager from "./Imager";

fsLightboxStore[2] = {
    collections: { sourcesLoadsHandlers: [null, { handleImageLoad: jest.fn() }] },
    data: { sources: [null, 'http://example.com/'] },
    elements: { sources: [] },
};

test('Imager', () => {
    const imager = shallowMount(Imager, {
        propsData: { fsLightboxIndex: 2, i: 1 }
    });

    expect(fsLightboxStore[2].elements.sources[1]).toBe(imager.element);
    expect(imager.element.src).toBe('http://example.com/');

    const e = new Event('load');
    imager.element.dispatchEvent(e);
    expect(fsLightboxStore[2].collections.sourcesLoadsHandlers[1].handleImageLoad).toBeCalledWith(e);
});
