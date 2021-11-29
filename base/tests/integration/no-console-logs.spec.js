test('there are no console.logs', async () => {
    const logSpy = jest.spyOn(console, 'log');

    const { renderComponentAndGetLightbox } = await import("<rootDir>/tests/__tests-services__/integration/renderComponentAndGetLightbox");
    const BaseOpenedLightbox = await import("../__tests-services__/components/BaseOpenedLightbox.vue");
    renderComponentAndGetLightbox(BaseOpenedLightbox.default);

    expect(logSpy).not.toBeCalled();
});