import React from "react";
import { shallow } from "enzyme";
import SearchBar from "src/components/SearchBar/SearchBar";

describe('TEST <SearchBar />', () => {
    it("Debería renderizar sin problemas", () => {
        shallow(<SearchBar />);
    });

    // it("Debería renderizar sin problemas con un producto vacío", () => {
    //     shallow(<SearchBar product={productEmpty} />);
    // });

    // it("Debería renderizar sin problemas sin un producto", () => {
    //     shallow(<SearchBar />);
    // });

    // it("Debería renderizar sin problemas el titulo del producto", () => {
    //     // const wrapper = shallow(<SearchBar product={product} />);
    //     // expect(wrapper.find('input').contains(product.title)).toEqual(true);
    //     const form = wrapper.find('form')

    //     expect(wrapper.state().submitted).toEqual(false)
    //     form.simulate('submit', { preventDefault() { } })
    //     expect(cmp().state().submitted).toEqual(true)



    //     const onSubmit = jest.fn();
    //     const wrapper = shallow(
    //         <SearchBar onSubmit={onSubmit} />
    //     );
    //     const title = wrapper.find("input");
    //     title.simulate('change', { target: { value: 'Hello' } })

    //     // title.instance().value = " aa  ";
    //     // title.simulate("change");
    //     // expect(setState).toHaveBeenCalledWith("Test");

    //     // const submitBtn = wrapper.find('form')
    //     // submitBtn.simulate('submit')
    //     // expect(onSubmit).toHaveBeenCalled();x

    //     const form = wrapper.find('form').at(0);
    //     const children = form.render().children();
    //     form.simulate('submit', { target: { children } });
    // });

})