import { shallowMount } from "@vue/test-utils";
import { fsLightboxStore } from "../../../fsLightboxStore";
import Videor from "./Videor.vue";

fsLightboxStore[2] = {
    collections: { sourcesLoadsHandlers: [null, { handleVideoLoad: () => {} }] },
    data: { sources: [null, null, 'example'] },
    elements: { sources: [] },
    props: {
        customAttributes: [
            {
                poster: 'first-custom-poster'
            },
            {
                poster: 'second-custom-poster'
            }
        ],
        videosPosters: ['first-poster', 'second-poster']
    }
};
let video;

describe('custom attributes and poster', () => {
    test('poster is set and customAttribute is set', () => {
        video = shallowMount(Videor, {
            propsData: { fsLightboxIndex: 2, i: 1 }
        });
        expect(video.attributes()['poster']).toBe('second-poster');
    })

    test('customAttribute is set and poster is not set', () => {
        fsLightboxStore[2].props.customAttributes[1] = { poster: 'second-custom-poster' };
        delete fsLightboxStore[2].props.videosPosters[1];
        video = shallowMount(Videor, {
            propsData: { fsLightboxIndex: 2, i: 1 }
        });
        expect(video.attributes()['poster']).toBe('second-custom-poster');
    })
})