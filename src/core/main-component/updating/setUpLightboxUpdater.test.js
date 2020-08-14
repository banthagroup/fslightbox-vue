import { setUpLightboxUpdater } from "../../../../src/core/main-component/updating/setUpLightboxUpdater";

const fsLightbox = {
    componentsServices: { isLightboxOpenManager: { get: () => false } },
    core: {
        lightboxUpdater: {},
        lightboxCloser: { closeLightbox: jest.fn() },
        lightboxOpener: { openLightbox: jest.fn() },
        slideIndexChanger: { jumpTo: jest.fn() }
    },
    stageIndexes: { current: 0 }
};
const lightboxUpdater = fsLightbox.core.lightboxUpdater;
setUpLightboxUpdater(fsLightbox);

test('handleTogglerUpdate', () => {
    lightboxUpdater.handleTogglerUpdate();
    expect(fsLightbox.core.lightboxOpener.openLightbox).toBeCalled();
    expect(fsLightbox.core.lightboxCloser.closeLightbox).not.toBeCalled();

    fsLightbox.componentsServices.isLightboxOpenManager.get = () => true;
    lightboxUpdater.handleTogglerUpdate();
    expect(fsLightbox.core.lightboxOpener.openLightbox).toBeCalledTimes(1);
    expect(fsLightbox.core.lightboxCloser.closeLightbox).toBeCalled();
});

test('runCurrentStageIndexUpdateActionsFor', () => {
    fsLightbox.componentsServices.isLightboxOpenManager.get = () => false;

    lightboxUpdater.runCurrentStageIndexUpdateActionsFor(0);
    expect(fsLightbox.core.slideIndexChanger.jumpTo).not.toBeCalled();

    lightboxUpdater.runCurrentStageIndexUpdateActionsFor(1);
    expect(fsLightbox.core.slideIndexChanger.jumpTo).not.toBeCalled();
    expect(fsLightbox.stageIndexes.current).toBe(1);

    fsLightbox.componentsServices.isLightboxOpenManager.get = () => true;
    lightboxUpdater.runCurrentStageIndexUpdateActionsFor(2);
    expect(fsLightbox.core.slideIndexChanger.jumpTo).toBeCalledWith(2);
    expect(fsLightbox.stageIndexes.current).toBe(1);
});
