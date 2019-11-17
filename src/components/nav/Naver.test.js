import { fsLightboxStore } from "../../fsLightboxStore";
import Nav from "./Naver";
import SlideNumber from "./SlideNumber";
import { shallowMount } from "@vue/test-utils";

fsLightboxStore[0] = {
    data: { sourcesCount: 1 }
};

test('Nav', () => {
    let nav = shallowMount(Nav, { propsData: { fsLightboxIndex: 0 } });
    expect(nav.contains(SlideNumber)).toBe(false);

    fsLightboxStore[0].data.sourcesCount = 2;
    nav = shallowMount(Nav, { propsData: { fsLightboxIndex: 0 } });
    expect(nav.contains(SlideNumber)).toBe(true);
});
