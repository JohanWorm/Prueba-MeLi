import React from "react";
import { shallow } from "enzyme";
import BreadCrumb from "src/components/BreadCrumb/BreadCrumb";

const categoriesListEmpty = [];
const categoriesList = [
    "Hogar, Muebles y Jardín",
    "Muebles para el Hogar",
    "Camas, Bases y Respaldos",
    "Camas"
];

describe('TEST <BreadCrumb />', () => {
    it("Debería renderizar sin problemas", () => {
        shallow(<BreadCrumb />);
    });

    it("Debería renderizar sin problemas enviando listado vacío de categorías", () => {
        const wrapper = shallow(<BreadCrumb categories={categoriesListEmpty} />);
        expect(wrapper.find('ul').children()).toHaveLength(0);
    });

    it("Debería renderizar sin problemas enviando listado con 4 categorías", () => {
        const wrapper = shallow(<BreadCrumb categories={categoriesList} />);
        expect(wrapper.find('ul').children()).toHaveLength(4);
    });

    it("Debería renderizar sin problemas enviando listado con varias categorías", () => {
        const wrapper = shallow(<BreadCrumb categories={categoriesList} />);
        expect(wrapper.find('ul').children().length).not.toBe(0);
    });

})