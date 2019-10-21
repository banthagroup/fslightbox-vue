import { setUpLightboxOpener } from "./setUpLightboxOpener";

const fsLightbox = {
    componentsServices: { isLightboxOpenManager: { set: jest.fn() } },
    core: { lightboxOpener: {}, lightboxOpenActioner: { runActions: 'run-actions' } }
};
setUpLightboxOpener(fsLightbox);

test('open', () => {
    fsLightbox.core.lightboxOpener.open();
    expect(fsLightbox.componentsServices.isLightboxOpenManager.set).toBeCalledWith(true, 'run-actions');
});
