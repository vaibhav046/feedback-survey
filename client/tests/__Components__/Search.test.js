import React from 'react';
import Enzyme, { shallow, mount, render } from "enzyme";
import { shallowToJson } from 'enzyme-to-json';
import { Search } from '../../src/components/Search';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import { reduxForm, reducer as formReducer } from 'redux-form';


Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let store;
let Decorated;
let SearchComponent;

// const Decorated = reduxForm({
//     form: 'property-details-form'
// })(Search)

function shallowSetup() {
    // Sample props to pass to our shallow render
    const props = {
        searchValue: 'Campaign Title',
        searchData: { "_id": "5f3f881291492a285ab8dc2b", "yes": 0, "no": 0, "title": "Campaign Title", "subject": "subject", "body": "casvbcbvacv", "recipients": [{ "responded": false, "_id": "5f3f881291492a285ab8dc2c", "email": "vaibhav046@gmail.com" }], "_user": "5f3f7185092d772778d96f30", "dateSent": "2020-08-21T08:38:42.781Z", "__v": 0 }
    }

    store = createStore(combineReducers({ form: formReducer }));
    Decorated = reduxForm({
        form: 'property-details-form'
    })(Search);
    SearchComponent = (props) => (
        <Provider store={store}>
            <MemoryRouter>
                <Decorated {...props} />
            </MemoryRouter>
        </Provider>
    );
    const enzymeWrapper = shallow(<Search {...props} />);
    return {
        props,
        enzymeWrapper,
        SearchComponent
    };
}




describe("Search Component", () => {
    const { props, SearchComponent } = shallowSetup()
    beforeAll(() => {
        wrapper = mount(<SearchComponent />);
    });
    test('renders Search component correctly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});