import { fsLightboxStore } from "../../../../fsLightboxStore";
import { shallowMount } from "@vue/test-utils";
import FullscreenButton from "./FullscreenButton";

fsLightboxStore[0] = {
    componentsServices: {
        isFullscreenOpenManager: {}
    },
    core: {
        fullscreenToggler: { enterFullscreen: jest.fn(), exitFullscreen: jest.fn() }
    }
};

test('FullscreenButton', () => {
    const fullscreenButton = shallowMount(FullscreenButton, {
        propsData: { fsLightboxIndex: 0 }
    });

    expect(fullscreenButton.vm.$children[0].$props).toEqual({
        onClick: fsLightboxStore[0].core.fullscreenToggler.enterFullscreen,
        viewBox: '0 0 18 18',
        size: '20px',
        d: 'M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z',
        title: 'Enter fullscreen'
    });

    fsLightboxStore[0].componentsServices.isFullscreenOpenManager.set(true);

    expect(fullscreenButton.vm.$children[0].$props).toEqual({
        onClick: fsLightboxStore[0].core.fullscreenToggler.exitFullscreen,
        viewBox: '0 0 950 1024',
        size: '24px',
        d: 'M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z',
        title: 'Exit fullscreen'
    });
});
