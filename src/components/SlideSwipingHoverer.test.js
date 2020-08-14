import { fsLightboxStore } from "../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import SlideSwipingHoverer from "./SlideSwipingHoverer";

fsLightboxStore[2] = {
    componentsServices: { hideSlideSwipingHoverer: null, showSlideSwipingHoverer: null }
};

test('SlideSwipingHoverer', async () => {
    const slideSwipingHoverer = shallowMount(SlideSwipingHoverer, {
        propsData: { fsLightboxIndex: 2 }
    });

    expect(slideSwipingHoverer.find('div').exists()).toBe(false);

    await fsLightboxStore[2].componentsServices.showSlideSwipingHoverer();
    expect(slideSwipingHoverer.find('div').exists()).toBe(true);

    await fsLightboxStore[2].componentsServices.hideSlideSwipingHoverer();
    expect(slideSwipingHoverer.find('div').exists()).toBe(false);
});
