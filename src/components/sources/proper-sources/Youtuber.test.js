import { fsLightboxStore } from "../../../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import Youtuber from "./Youtuber";

fsLightboxStore[2] = {
    collections: { sourcesLoadsHandlers: [null, { handleYoutubeLoad: jest.fn() }] },
    elements: { sources: [] },
    props: { sources: [null, 'https://www.youtube.com/watch?v=xshEZzpS4CQ'] }
};

test('Youtuber', () => {
    const youtuber = shallowMount(Youtuber, {
        propsData: { fsLightboxIndex: 2, i: 1 }
    });

    expect(fsLightboxStore[2].elements.sources[1]).toBe(youtuber.element);
    expect(youtuber.element.src).toBe('https://www.youtube.com/embed/xshEZzpS4CQ');
    expect(fsLightboxStore[2].collections.sourcesLoadsHandlers[1].handleYoutubeLoad).toBeCalled();
});
