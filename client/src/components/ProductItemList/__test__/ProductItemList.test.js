import React from "react";
import { shallow } from "enzyme";
import ProductItemList from "src/components/ProductItemList/ProductItemList";
import * as product from "__mockData__/product-detail.json";

describe('TEST <ProductItemList />', () => {
    it("Debería renderizar sin problemas", () => {
        shallow(<ProductItemList product={product} />);
    });

    it("Debería renderizar sin problemas con un producto vacío", () => {
        shallow(<ProductItemList product={{}} />);
    });

    it("Debería renderizar sin problemas sin un producto", () => {
        shallow(<ProductItemList />);
    });

    it("Debería renderizar sin problemas el titulo del producto", () => {
        const wrapper = shallow(<ProductItemList product={product} />);
        expect(wrapper.find('.product__item--data-title').contains(product.title)).toEqual(true);
    });

})