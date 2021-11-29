import { shallowMount } from "@vue/test-utils";
import ToolbarButton from "./ToolbarButton.vue";
import Svger from "../../helpers/Svger.vue";

const onClick = jest.fn();

test('ToolbarButton', () => {
    const toolbarButton = shallowMount(ToolbarButton, {
        propsData: {
            onClick: onClick,
            size: '20px',
            viewBox: '0 0 20 20',
            d: 'M142',
            title: 'Example title'
        }
    });

    const e = new Event('click');
    toolbarButton.element.dispatchEvent(e);
    expect(onClick).toBeCalledWith(e);

    expect(toolbarButton.getComponent(Svger).props()).toEqual({
        size: '20px',
        viewBox: '0 0 20 20',
        d: 'M142'
    });
});
