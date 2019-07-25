//survey forms show the form user to add input 

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import FIELDS from './formFields';

// const FIELDS = [
//     { label: 'Survey Title', name: 'title' },
//     { label: 'Subject Line', name: 'Subject' },
//     { label: 'Email Body', name: 'body' },
//     { label: 'Recipients', name: 'email' }
// ]

class SurveyForm extends Component {
    renderFields() {
        return FIELDS.map(({ label, name }) => {

            return <Field component={SurveyField} type="text" label={label} name={name} key={name} />
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} >
                    {this.renderFields()}
                    < Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button className="teal btn-flat right white-text" name="submit" type="submit">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div >
        );
    }
}

function validate(values) {
    const errors = {};
    errors.recipients = validateEmails(values.recipients || '')

    FIELDS.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide the ${name}`;
        }
    });
    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);