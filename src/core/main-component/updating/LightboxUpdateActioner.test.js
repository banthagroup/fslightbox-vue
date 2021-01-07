import { LightboxUpdateActioner } from "./LightboxUpdateActioner";

const fsLightbox = {
    componentsServices: { isLightboxOpenManager: { get: () => false } },
    core: {
        slideIndexChanger: { jumpTo: jest.fn() }
    },
    stageIndexes: { current: 0 }
};
const lightboxUpdateActioner = new LightboxUpdateActioner(fsLightbox);

test('runCurrentStageIndexUpdateActionsFor', () => {
    fsLightbox.componentsServices.isLightboxOpenManager.get = () => false;

    lightboxUpdateActioner.runCurrentStageIndexUpdateActionsFor(0);
    expect(fsLightbox.core.slideIndexChanger.jumpTo).not.toBeCalled();

    lightboxUpdateActioner.runCurrentStageIndexUpdateActionsFor(1);
    expect(fsLightbox.core.slideIndexChanger.jumpTo).not.toBeCalled();
    expect(fsLightbox.stageIndexes.current).toBe(1);

    fsLightbox.componentsServices.isLightboxOpenManager.get = () => true;
    lightboxUpdateActioner.runCurrentStageIndexUpdateActionsFor(2);
    expect(fsLightbox.core.slideIndexChanger.jumpTo).toBeCalledWith(2);
    expect(fsLightbox.stageIndexes.current).toBe(1);
});
