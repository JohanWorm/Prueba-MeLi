import React from "react";
import { shallow } from "enzyme";
import NotFound from "src/pages/NotFound/NotFound";

describe('TEST <NotFound />', () => {
    it("Debería renderizar sin problemas", () => {
        shallow(<NotFound />);
    });

    it("Debería renderizar texto informativo de página no encontrada", () => {
        const wrapper = shallow(<NotFound />);
        const stringNotFound = "¡Ups! Página no encontrada.";
        expect(wrapper.contains(stringNotFound)).toEqual(true);
    });
})