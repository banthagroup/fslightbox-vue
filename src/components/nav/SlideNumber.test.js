import SlideNumber from "./SlideNumber.vue";
import { mount } from "@vue/test-utils";
import { fsLightboxStore } from "../../fsLightboxStore";

test('SlideNumber', () => {
    fsLightboxStore[0] = {
        componentsServices: {},
        data: { sourcesCount: 3 },
        stageIndexes: { current: 1 }
    };

    const slideNumber = mount(SlideNumber, { propsData: { fsLightboxIndex: 0 } });
    const slideNumberInnerChildren = slideNumber.element.firstElementChild.children;
    expect(slideNumberInnerChildren[0].innerHTML).toBe('2');
    expect(slideNumberInnerChildren[2].innerHTML).toBe('3');

    fsLightboxStore[0].componentsServices.setSlideNumber(1);
    expect(slideNumberInnerChildren[0].innerHTML).toBe('1');
});
