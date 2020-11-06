import { fsLightboxStore } from "../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import SlideButtons from "./SlideButtons";

fsLightboxStore[2] = {
    core: { slideChangeFacade: { changeToPrevious: jest.fn(), changeToNext: jest.fn() } },
    props: { sources: { length: 1 } }
};

test('SlideButtons', () => {
    let slideButtons = shallowMount(SlideButtons, { propsData: { fsLightboxIndex: 2 } });
    expect(slideButtons.vm.$children.length).toBe(0);

    fsLightboxStore[2].props.sources.length = 2;
    slideButtons = shallowMount(SlideButtons, { propsData: { fsLightboxIndex: 2 } });
    expect(slideButtons.vm.$children.length).toBe(2);
    expect(slideButtons.vm.$children[0].$props['onClick']).toBe(fsLightboxStore[2].core.slideChangeFacade.changeToPrevious);
    expect(slideButtons.vm.$children[1].$props['onClick']).toBe(fsLightboxStore[2].core.slideChangeFacade.changeToNext);
});
