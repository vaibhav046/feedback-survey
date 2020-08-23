import axios from 'axios';
import thunk from 'redux-thunk'
import { fetchUser, handleToken, searchSurvey, submitSurvey } from '../../src/actions/index';
import { FETCH_SURVEY, FETCH_USER, FETCH_USER_SUCCEESS } from '../../src/actions/types';
import configureStore from 'redux-mock-store';
import fetchMock from 'node-fetch';
import expect from 'expect';


// const mockStore = configureStore();
// const store = mockStore();
jest.mock('node-fetch', () => require('fetch-mock').sandbox())
axios.defaults.baseURL = "http://localhost:3000/"
const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates FETCH_USER_SUCCESS when fetching users has been done', () => {
        fetchMock
            .mock('api/currentUser', { headers: { 'content-type': 'application/json' } })


        const expectedActions = [
            {
                type: FETCH_USER,
                payload: ""
            }
        ]
        const store = mockStore({ auth: {} })


        return store.dispatch(fetchUser()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})