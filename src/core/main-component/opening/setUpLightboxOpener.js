export function setUpLightboxOpener(
    {
        componentsServices: { isLightboxOpenManager },
        core: { lightboxOpener: self, lightboxOpenActioner },
    }
) {
    self.open = () => {
        isLightboxOpenManager.set(true, lightboxOpenActioner.runActions);
    };
}
