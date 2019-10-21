import FsLightbox from "../src/FsLightbox.vue";
import { TEST_YOUTUBE_URL, testSources } from "./__tests-services__/testVars";
import { mount } from "@vue/test-utils";
import { fsLightboxStore } from "../src/fsLightboxStore";

jest.useFakeTimers();

test('updating toggler', async () => {
    const fsLightbox = mount(FsLightbox, {
        propsData: { sources: testSources, toggler: false }
    });

    expect(fsLightbox.contains('div')).toBe(false);

    fsLightbox.setProps({ toggler: true });
    expect(fsLightbox.contains('div')).toBe(true);
});

test('updating slide', () => {
    const fsLightbox = mount(FsLightbox, {
        propsData: { sources: testSources, toggler: false, slide: 2 }
    });

    const fsLightboxInstance = fsLightboxStore[fsLightbox.vm.fsLightboxIndex];
    expect(fsLightboxInstance.stageIndexes.current).toBe(1);

    fsLightbox.setProps({ slide: 1 });
    expect(fsLightboxInstance.stageIndexes.current).toBe(0);

    fsLightbox.setProps({ sourceIndex: 1 });
    expect(fsLightboxInstance.stageIndexes.current).toBe(1);

    fsLightbox.setProps({ source: TEST_YOUTUBE_URL });
    expect(fsLightboxInstance.stageIndexes.current).toBe(2);
});
