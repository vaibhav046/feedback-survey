import React from 'react';
import { connect } from 'react-redux';
import FIELDS from './formFields';
import * as actions from '../../actions'
import Dashboard from '../Dashboard';

const renderFields = (formValues) => {
    return FIELDS.map(({ label, name }) => {
        console.log(formValues);
        return (
            <div key={name}>
                <div key={label}>
                    <label>{label}</label>
                </div>
                <div key={name}>
                    {formValues[name]}
                </div>
            </div>);
    })
}
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, loaded }) => {
    if (!loaded) {
        return (
            <div>
                <h5>
                    Please confirm your entries!
            </h5>
                {renderFields(formValues)}
                <button
                    className="yellow darken-3 btn-flat"
                    onClick={onCancel}>
                    Back
            </button>
                <button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues)}>
                    Send Survey
                <i className="material-icons right">email</i>
                </button>
            </div>
        );
    }
    else {
        return (<Dashboard />)
    }
}
function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values,
        loaded: state.auth.loaded
    };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);