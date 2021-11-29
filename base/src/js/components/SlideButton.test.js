import { shallowMount } from "@vue/test-utils";
import SlideButton from "./SlideButton";
import Svger from "./helpers/Svger.vue";

const onClick = jest.fn();

test('SlideButton', () => {
    const slideButton = shallowMount(SlideButton, {
        propsData: { onClick: onClick, name: 'previous', d: 'example-d' }
    });

    expect(slideButton.element.title).toBe('Previous slide');
    expect(slideButton.element.className).toBe('fslightbox-slide-btn-container fslightbox-slide-btn-previous-container');
    const e = new Event('click');
    slideButton.element.dispatchEvent(e);
    expect(onClick).toBeCalled();

    expect(slideButton.findComponent(Svger).props()).toEqual({
        viewBox: '0 0 20 20',
        size: '20px',
        d: 'example-d'
    });
});
