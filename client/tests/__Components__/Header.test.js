import React from 'react';
import Enzyme, { shallow, mount, render } from "enzyme";
import { shallowToJson } from 'enzyme-to-json';
import { Header } from '../../src/components/Header';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import reducers from '../../src/reducers';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

function shallowSetup() {
    // Sample props to pass to our shallow render
    const props = {
        auth: {
            googleId: '1021201020102',
            credits: 500
        }
    }
    const enzymeWrapper = shallow(<Header {...props} />);
    return {
        props,
        enzymeWrapper
    };
}

describe("Header Component", () => {

    const { enzymeWrapper, props } = shallowSetup()
    beforeAll(() => {
        wrapper = mount(<MemoryRouter><Provider store={store} ><Header {...props} /></Provider></MemoryRouter>);
    });
    test('renders Header component correctly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
