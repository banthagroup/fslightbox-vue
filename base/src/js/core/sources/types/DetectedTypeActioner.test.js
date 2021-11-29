import { DetectedTypeActioner } from "./DetectedTypeActioner";

const fsLightbox = {
    componentsServices: {
        isLightboxOpenManager: { get: () => false },
        updateSourceDirectWrapperCollection: [jest.fn(), jest.fn(), jest.fn(), jest.fn(), jest.fn()]
    },
    elements: { sourcesComponents: [] }
};

let detectedTypeActioner = new DetectedTypeActioner(fsLightbox);

test('runActionsForSourceTypeAndIndex', () => {
    detectedTypeActioner.runActionsForSourceTypeAndIndex('invalid', 0);
    expect(fsLightbox.elements.sourcesComponents[0]).toBe('Invalider');
    expect(fsLightbox.componentsServices.updateSourceDirectWrapperCollection[0]).not.toBeCalled();

    fsLightbox.componentsServices.isLightboxOpenManager.get = () => true;
    detectedTypeActioner = new DetectedTypeActioner(fsLightbox);
    detectedTypeActioner.runActionsForSourceTypeAndIndex('image', 0);
    expect(fsLightbox.elements.sourcesComponents[0]).toBe('Imager');
    expect(fsLightbox.componentsServices.updateSourceDirectWrapperCollection[0]).toBeCalled();

    detectedTypeActioner.runActionsForSourceTypeAndIndex('video', 1);
    expect(fsLightbox.elements.sourcesComponents[1]).toBe('Videor');

    detectedTypeActioner.runActionsForSourceTypeAndIndex('youtube', 2);
    expect(fsLightbox.elements.sourcesComponents[2]).toBe('Youtuber');

    detectedTypeActioner.runActionsForSourceTypeAndIndex('custom', 3);
    expect(fsLightbox.elements.sourcesComponents[3]).toBe('Customer');

    detectedTypeActioner.runActionsForSourceTypeAndIndex('invalid', 4);
    expect(fsLightbox.elements.sourcesComponents[4]).toBe('Invalider');
});
