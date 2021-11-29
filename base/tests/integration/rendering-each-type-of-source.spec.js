import {
    asyncRenderComponentAndGetLightbox
} from "<rootDir>/tests/__tests-services__/integration/renderComponentAndGetLightbox";
import BaseOpenedLightbox from "../__tests-services__/components/BaseOpenedLightbox.vue";

test('rendering each type of source', async () => {
    const component = await asyncRenderComponentAndGetLightbox(BaseOpenedLightbox);

    expect(document.getElementsByTagName('img')).toHaveLength(1);
    expect(document.getElementsByTagName('video')).toHaveLength(1);
    expect(document.getElementsByTagName('iframe')).toHaveLength(0);
    expect(document.getElementsByClassName('fslightbox-invalid-file-wrapper')).toHaveLength(0);
    expect(document.getElementsByTagName('h6')).toHaveLength(1);

    await component.lightbox.core.slideIndexChanger.jumpTo(2);
    expect(document.getElementsByTagName('iframe')).toHaveLength(1);
    expect(document.getElementsByClassName('fslightbox-invalid-file-wrapper')).toHaveLength(1);
});