import { DetectedTypeActioner } from "./DetectedTypeActioner";
import { SourceLoadHandler } from "../SourceLoadHandler";

const fsLightbox = {
    collections: { sourcesLoadsHandlers: [] },
    componentsServices: { setSourceComponentCollection: [jest.fn(), jest.fn(), jest.fn(), jest.fn(), jest.fn()] },
    getIsOpen: () => false,
    resolve: jest.fn(() => 'source-load-handler')
};

let detectedTypeActioner = new DetectedTypeActioner(fsLightbox);

test('runActionsForSourceTypeAndIndex', () => {
    detectedTypeActioner.runActionsForSourceTypeAndIndex('invalid', 0);
    expect(fsLightbox.resolve).not.toBeCalled();
    expect(fsLightbox.componentsServices.setSourceComponentCollection[0]).not.toBeCalled();

    fsLightbox.getIsOpen = () => true;
    detectedTypeActioner = new DetectedTypeActioner(fsLightbox);
    detectedTypeActioner.runActionsForSourceTypeAndIndex('image', 0);
    expect(fsLightbox.resolve).toBeCalledWith(SourceLoadHandler, [0]);
    expect(fsLightbox.componentsServices.setSourceComponentCollection[0]).toBeCalledWith('Imager');

    detectedTypeActioner.runActionsForSourceTypeAndIndex('video', 1);
    expect(fsLightbox.componentsServices.setSourceComponentCollection[1]).toBeCalledWith('Videor');

    detectedTypeActioner.runActionsForSourceTypeAndIndex('youtube', 2);
    expect(fsLightbox.componentsServices.setSourceComponentCollection[2]).toBeCalledWith('Youtuber');

    detectedTypeActioner.runActionsForSourceTypeAndIndex('custom', 3);
    expect(fsLightbox.componentsServices.setSourceComponentCollection[3]).toBeCalledWith('Customer');

    detectedTypeActioner.runActionsForSourceTypeAndIndex('invalid', 4);
    expect(fsLightbox.componentsServices.setSourceComponentCollection[4]).toBeCalledWith('Invalider');
});
