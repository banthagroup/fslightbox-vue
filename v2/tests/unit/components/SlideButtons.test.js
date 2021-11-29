import { fsLightboxStore } from "../../../../base/src/js/fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import SlideButtons from "../../../../base/src/js/components/SlideButtons.vue";
import SlideButton from "../../../../base/src/js/components/SlideButton.vue";

fsLightboxStore[2] = {
    core: { slideChangeFacade: { changeToPrevious: jest.fn(), changeToNext: jest.fn() } },
    props: { sources: { length: 1 } }
};

test('SlideButtons', () => {
    let slideButtons = shallowMount(SlideButtons, { propsData: { fsLightboxIndex: 2 } });
    expect(slideButtons.findAllComponents(SlideButton).length).toBe(0);

    fsLightboxStore[2].props.sources.length = 2;
    slideButtons = shallowMount(SlideButtons, { propsData: { fsLightboxIndex: 2 } });
    const slideButtonsChildren = slideButtons.findAllComponents(SlideButton);
    expect(slideButtonsChildren.length).toBe(2);
    expect(slideButtonsChildren.at(0).props()['onClick']).toBe(fsLightboxStore[2].core.slideChangeFacade.changeToPrevious);
    expect(slideButtonsChildren.at(1).props()['onClick']).toBe(fsLightboxStore[2].core.slideChangeFacade.changeToNext);
});
