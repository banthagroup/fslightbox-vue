import { fsLightboxStore } from "../../../fsLightboxStore";
import { mount } from "@vue/test-utils";
import Customer from "./Customer.vue";
import ExampleCustom from "../../../../demo/ExampleCustom.vue";
import TestCustomSourceWithProps
    from "../../../../tests/__tests-services__/integration/subcomponents/CustomSourceWithProps.vue";
import { SOURCE_CLASS_NAME } from "../../../constants/classes-names";

fsLightboxStore[2] = {
    collections: { sourcesLoadsHandlers: [null, { handleCustomLoad: jest.fn() }] },
    elements: { sources: [] },
    props: { sources: [null, ExampleCustom] }
};

test('Customer - only component', () => {
    mount(Customer, {
        propsData: { fsLightboxIndex: 2, i: 1 }
    });

    // example custom component is vimeo video so checking if tag is iframe
    expect(fsLightboxStore[2].elements.sources[1].tagName).toBe('IFRAME');
    expect(fsLightboxStore[2].elements.sources[1].classList.contains(SOURCE_CLASS_NAME)).toBe(true);

    expect(fsLightboxStore[2].collections.sourcesLoadsHandlers[1].handleCustomLoad).toBeCalled();
});

test('Customer - component with props', () => {
    fsLightboxStore[2].props.sources[1] = {
        component: TestCustomSourceWithProps,
        props: {
            firstProp: 'first-prop',
            secondProp: 'second-prop'
        }
    };

    mount(Customer, {
        propsData: { fsLightboxIndex: 2, i: 1 }
    });

    expect(fsLightboxStore[2].elements.sources[1].innerHTML).toContain('<p>first-prop</p> <p>second-prop</p>');
    expect(fsLightboxStore[2].collections.sourcesLoadsHandlers[1].handleCustomLoad).toBeCalled();
});
