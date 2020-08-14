export function setUpLightboxOpener(
    {
        componentsServices: { isLightboxOpenManager },
        core: { lightboxOpener: self, lightboxOpenActioner },
    }
) {
    self.openLightbox = () => {
        isLightboxOpenManager.set(true, lightboxOpenActioner.runActions);
    };
}
