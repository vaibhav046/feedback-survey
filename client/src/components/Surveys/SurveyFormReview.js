import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FIELDS from './formFields';
import * as actions from '../../actions'

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
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

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
            <button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues, history)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
}
function mapStateToProps(state) {
    // console.log(state.form.surveyForm.values);
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));