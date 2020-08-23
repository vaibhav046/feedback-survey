import React from 'react';
import Enzyme, { shallow, mount, render } from "enzyme";
import { shallowToJson } from 'enzyme-to-json';
import { Landing } from '../../src/components/Landing';
import Adapter from 'enzyme-adapter-react-16';
const loggedIn = true;

Enzyme.configure({ adapter: new Adapter() });
let wrapper;
describe("Landing Component", () => {
    beforeAll(() => {
        wrapper = mount(<Landing />);
    });
    test('renders Landing component correctly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
