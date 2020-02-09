import { fsLightboxStore } from "../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import SlideSwipingHoverer from "./SlideSwipingHoverer";

fsLightboxStore[2] = {
    componentsServices: { hideSlideSwipingHoverer: null, showSlideSwipingHoverer: null }
};

test('SlideSwipingHoverer', () => {
    const slideSwipingHoverer = shallowMount(SlideSwipingHoverer, {
        propsData: { fsLightboxIndex: 2 }
    });

    expect(slideSwipingHoverer.contains('div')).toBe(false);

    fsLightboxStore[2].componentsServices.showSlideSwipingHoverer();
    expect(slideSwipingHoverer.contains('div')).toBe(true);

    fsLightboxStore[2].componentsServices.hideSlideSwipingHoverer();
    expect(slideSwipingHoverer.contains('div')).toBe(false);
});
