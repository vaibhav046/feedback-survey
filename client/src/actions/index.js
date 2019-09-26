import axios from 'axios';
import { FETCH_USER, FETCH_SURVEY } from './types';

export const fetchUser = () => (dispatch) => {
    axios.get('/api/currentUser')
        .then(res => dispatch({
            type: FETCH_USER,
            payload: res.data
        }));
};

export const handleToken = (token) => async (dispatch) => {
    const res = await axios.post('/api/stripe', token);
    // debugger;
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys/thanks', values);
    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const searchSurvey = (queryString) => async (dispatch) => {
    console.log(queryString);
    const res = await axios.get(`/api/surveys/${queryString}`);
    dispatch({
        type: FETCH_SURVEY,
        payload: res.data
    });
}