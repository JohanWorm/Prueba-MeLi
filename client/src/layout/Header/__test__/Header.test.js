import React from "react";
import { shallow } from "enzyme";
import Header from "src/layout/Header/Header";
import SearchBar from "src/components/SearchBar/SearchBar";

describe('TEST <Header />', () => {
    it("Debería renderizar sin problemas", () => {
        shallow(<Header />);
    });

    it("Debería renderizar <SearchBar />", () => {
        const wrapper = shallow(<Header />);
        const searchBarComponent = <SearchBar />;
        expect(wrapper.contains(searchBarComponent)).toEqual(true);
    });
})