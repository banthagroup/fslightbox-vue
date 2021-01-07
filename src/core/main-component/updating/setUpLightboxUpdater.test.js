import { setUpLightboxUpdater } from "./setUpLightboxUpdater";

const fsLightbox = {
    componentsServices: { isLightboxOpenManager: { get: () => false } },
    core: {
        lightboxUpdater: {},
        lightboxCloser: { closeLightbox: jest.fn() },
        lightboxOpener: { initializeAndOpenLightbox: jest.fn(), openLightbox: jest.fn() },
        slideIndexChanger: { jumpTo: jest.fn() }
    },
    data: {
        isInitialized: false
    },
    resolve: jest.fn()
};
setUpLightboxUpdater(fsLightbox);
const lightboxUpdater = fsLightbox.core.lightboxUpdater;

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

    fsLightbox.componentsServices.isLightboxOpenManager.get = () => true;
    lightboxUpdater.handleTogglerUpdate();
    expect(fsLightbox.core.lightboxOpener.initializeAndOpenLightbox).toBeCalledTimes(1);
    expect(fsLightbox.core.lightboxOpener.openLightbox).toBeCalledTimes(1);
    expect(fsLightbox.core.lightboxCloser.closeLightbox).toBeCalled();
});
