import React from "react";
import { Route } from 'react-router-dom';
import { shallow } from "enzyme";
import Header from "src/layout/Header/Header";
import App from "src/layout/App/App";

describe('TEST <App />', () => {
    it("Debería renderizar sin problemas", () => {
        shallow(<App />);
    });

    it("Debería renderizar <Header />", () => {
        const wrapper = shallow(<App />);
        const headerComponent = <Header />;
        expect(wrapper.contains(headerComponent)).toEqual(true);
    });

    it('Deberia renderizar las rutas', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Route).length).not.toBe(0);
    });
})