import FsLightbox from "../src/FsLightbox.vue";
import { testSources } from "./__tests-services__/testVars";
import { mount } from "@vue/test-utils";

jest.useFakeTimers();

test('updating toggler', async () => {
    const fsLightbox = mount(FsLightbox, {
        propsData: { sources: testSources, toggler: false }
    });

    expect(fsLightbox.contains('div')).toBe(false);

    fsLightbox.setProps({ toggler: true });
    expect(fsLightbox.contains('div')).toBe(true);
});

test('updating source', () => {

});
