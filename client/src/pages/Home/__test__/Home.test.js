import React from "react";
import { shallow } from "enzyme";
import Home from "src/pages/Home/Home";

describe('TEST <Home />', () => {
    it("Debería renderizar sin problemas", () => {
        shallow(<Home />);
    });

    it("Debería renderizar texto informativo de búsqueda", () => {
        const wrapper = shallow(<Home />);
        const stringSearch = "Inicie una búsqueda";
        expect(wrapper.contains(stringSearch)).toEqual(true);
    });
})