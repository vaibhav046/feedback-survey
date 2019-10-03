import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './Surveys/SurveyField';
import * as actions from '../actions/index';


class Search extends Component {
    state = { searchValue: "" };
    constructor(props) {
        super(props);
        this.state = { searchValue: "" };
    }

    renderContent(surveys) {
        return surveys.map((survey, index) => {
            return (
                <div key={index}>
                    <div key={survey['title']}>
                        <label>{survey['title']}</label>
                    </div>
                    <div key={index + `body`}>
                        {survey['body']}
                    </div>
                </div>
            );
        });
    }
    render() {
        return (
            <div className="container ">
                <div className="space-space-top1 parallax">
                    <form >
                        <Field component={SurveyField} type="text" label="SEARCH" name="search" key="search" />
                        <button className="teal btn-flat center white-text" onClick={(evt) => { this.props.searchSurvey(this.props.searchValue.values['search']); evt.preventDefault(); }}>Click me!</button>
                    </form>
                </div>
                {this.props.searchData ? this.renderContent(this.props.searchData) : null}
            </div >
        );
    }
};

function mapStateToProps({ form, surveys }) {
    debugger;
    return {
        searchValue: form.searchForm,
        searchData: surveys
    }
}


export default reduxForm({
    form: 'searchForm'
})(connect(mapStateToProps, actions)(Search));