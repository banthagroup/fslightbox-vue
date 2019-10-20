import { fsLightboxStore } from "../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import SlideSwipingHoverer from "./SlideSwipingHoverer";

fsLightboxStore[2] = {
    componentsServices: { isSlideSwipingHovererShownManager: {} }
};

test('SlideSwipingHoverer', () => {
    const slideSwipingHoverer = shallowMount(SlideSwipingHoverer, {
        propsData: { fsLightboxIndex: 2 }
    });

    expect(slideSwipingHoverer.contains('div')).toBe(false);

    fsLightboxStore[2].componentsServices.isSlideSwipingHovererShownManager.set(true);
    expect(slideSwipingHoverer.contains('div')).toBe(true);
    expect(fsLightboxStore[2].componentsServices.isSlideSwipingHovererShownManager.get()).toBe(true);

    fsLightboxStore[2].componentsServices.isSlideSwipingHovererShownManager.set(false);
    expect(slideSwipingHoverer.contains('div')).toBe(false);
    expect(fsLightboxStore[2].componentsServices.isSlideSwipingHovererShownManager.get()).toBe(false);
});
