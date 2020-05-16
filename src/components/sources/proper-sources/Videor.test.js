import { fsLightboxStore } from "../../../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import Videor from "./Videor";

fsLightboxStore[2] = {
    collections: { sourcesLoadsHandlers: [null, { handleVideoLoad: jest.fn() }] },
    data: { sources: [null, 'http://example.com/'] },
    elements: { sources: [] },
    props: {}
};

test('Videor', () => {
    let videor = shallowMount(Videor, {
        propsData: { fsLightboxIndex: 2, i: 1 }
    });

    expect(fsLightboxStore[2].elements.sources[1]).toBe(videor.element);
    expect(videor.element.poster).toBe('');
    expect(videor.element.firstChild.src).toBe('http://example.com/');

    const e = new Event('loadedmetadata');
    videor.element.dispatchEvent(e);
    expect(fsLightboxStore[2].collections.sourcesLoadsHandlers[1].handleVideoLoad).toBeCalledWith(e);


    fsLightboxStore[2].props.videosPosters = [null, 'http://videoposter.com/'];
    videor = shallowMount(Videor, {
        propsData: { fsLightboxIndex: 2, i: 1 }
    });

    expect(videor.element.poster).toBe('http://videoposter.com/');
});
