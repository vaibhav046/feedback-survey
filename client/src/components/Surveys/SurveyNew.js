//survey new helps creating the new survey

import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

export default class SurveyNew extends Component {
    render() {
        return (
            <div style={{ margin: '50px 0' }}>
                <SurveyForm />
            </div>
        );
    }
}