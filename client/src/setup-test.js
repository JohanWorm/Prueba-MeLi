import '@babel/plugin-transform-regenerator';
import regeneratorRuntime from "regenerator-runtime";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
