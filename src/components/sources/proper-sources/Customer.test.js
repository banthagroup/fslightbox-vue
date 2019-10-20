import { fsLightboxStore } from "../../../fsLightboxStore";
import { mount } from "@vue/test-utils";
import Customer from "./Customer.vue";
import ExampleCustom from "../../../../demo/ExampleCustom.vue";
import { SOURCE_CLASS_NAME } from "../../../constants/classes-names";

fsLightboxStore[2] = {
    collections: { sourcesLoadsHandlers: [null, { handleCustomLoad: jest.fn() }] },
    elements: { sources: [] },
    props: { customSources: [null, ExampleCustom] }
};

test('Customer', () => {
    mount(Customer, {
        propsData: { fsLightboxIndex: 2, i: 1 }
    });

    // example custom component is vimeo video so checking if tag is iframe
    expect(fsLightboxStore[2].elements.sources[1].tagName).toBe('IFRAME');
    expect(fsLightboxStore[2].elements.sources[1].classList.contains(SOURCE_CLASS_NAME)).toBe(true);

    expect(fsLightboxStore[2].collections.sourcesLoadsHandlers[1].handleCustomLoad).toBeCalled();
});