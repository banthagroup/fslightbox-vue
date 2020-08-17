import { setUpLightboxUpdater } from "../../../../src/core/main-component/updating/setUpLightboxUpdater";

const fsLightbox = {
    componentsServices: { isLightboxRenderedManager: { get: () => false } },
    core: {
        lightboxUpdater: {},
        lightboxCloser: { closeLightbox: jest.fn() },
        lightboxOpener: { initializeAndOpenLightbox: jest.fn(), openLightbox: jest.fn() },
        slideIndexChanger: { jumpTo: jest.fn() }
    },
    data: {
        isInitialized: false
    },
    stageIndexes: { current: 0 }
};
const lightboxUpdater = fsLightbox.core.lightboxUpdater;
setUpLightboxUpdater(fsLightbox);

test('handleTogglerUpdate', () => {
    lightboxUpdater.handleTogglerUpdate();
    expect(fsLightbox.core.lightboxOpener.initializeAndOpenLightbox).toBeCalled();
    expect(fsLightbox.core.lightboxCloser.closeLightbox).not.toBeCalled();
    expect(fsLightbox.core.lightboxCloser.closeLightbox).not.toBeCalled();

    fsLightbox.data.isInitialized = true;
    lightboxUpdater.handleTogglerUpdate();
    expect(fsLightbox.core.lightboxOpener.initializeAndOpenLightbox).toBeCalledTimes(1);
    expect(fsLightbox.core.lightboxOpener.openLightbox).toBeCalled();
    expect(fsLightbox.core.lightboxCloser.closeLightbox).not.toBeCalled();

    fsLightbox.componentsServices.isLightboxRenderedManager.get = () => true;
    lightboxUpdater.handleTogglerUpdate();
    expect(fsLightbox.core.lightboxOpener.initializeAndOpenLightbox).toBeCalledTimes(1);
    expect(fsLightbox.core.lightboxOpener.openLightbox).toBeCalledTimes(1);
    expect(fsLightbox.core.lightboxCloser.closeLightbox).toBeCalled();
});

test('runCurrentStageIndexUpdateActionsFor', () => {
    fsLightbox.componentsServices.isLightboxRenderedManager.get = () => false;

    lightboxUpdater.runCurrentStageIndexUpdateActionsFor(0);
    expect(fsLightbox.core.slideIndexChanger.jumpTo).not.toBeCalled();

    lightboxUpdater.runCurrentStageIndexUpdateActionsFor(1);
    expect(fsLightbox.core.slideIndexChanger.jumpTo).not.toBeCalled();
    expect(fsLightbox.stageIndexes.current).toBe(1);

    fsLightbox.componentsServices.isLightboxRenderedManager.get = () => true;
    lightboxUpdater.runCurrentStageIndexUpdateActionsFor(2);
    expect(fsLightbox.core.slideIndexChanger.jumpTo).toBeCalledWith(2);
    expect(fsLightbox.stageIndexes.current).toBe(1);
});
