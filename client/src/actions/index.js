import axios from 'axios';
import { FETCH_USER, FETCH_SURVEY, FETCH_SURVEY_SUCCESS, FETCH_USER_SUCCEESS } from './types';
import { createBrowserHistory } from 'history';
export const browserHistory = createBrowserHistory();


export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/currentUser');
    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};

export const handleToken = (token) => async (dispatch) => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const submitSurvey = (values) => async dispatch => {
    const res = await axios.post('/api/surveys/thanks', values);
    dispatch({ type: FETCH_USER, payload: res.data });
    dispatch({ type: FETCH_USER_SUCCEESS, payload: res.data })
    browserHistory.push('/surveys');
}

export const searchSurvey = (queryString) => async (dispatch) => {
    console.log(queryString);
    const res = await axios.get(`/api/surveys/search/${queryString}`);
    dispatch({
        type: FETCH_SURVEY,
        payload: res.data
    });
    dispatch({
        type: FETCH_SURVEY_SUCCESS,
        payload: res.data
    })
}