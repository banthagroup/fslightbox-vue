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
    expect(slideNumber.element.children[0].innerHTML).toBe('2');
    expect(slideNumber.element.children[1].innerHTML).toBe('/');
    expect(slideNumber.element.children[2].innerHTML).toBe('3');

    fsLightboxStore[0].componentsServices.setSlideNumber(1);
    expect(slideNumber.element.children[0].innerHTML).toBe('1');
});
