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
    render() {
        return (
            <div className="container ">
                <div className="space-space-top1 parallax">
                    <form >
                        <Field component={SurveyField} type="text" label="SEARCH" name="search" key="search" />
                        <button className="teal btn-flat center white-text" onClick={(evt) => { this.props.searchSurvey(this.props.searchValue.values['search']); evt.preventDefault(); }}>Click me!</button>
                    </form>
                </div>
                {/* {this.renderContent()} */}
            </div >
        );
    }
};

function mapStateToProps({ form }) {
    return {
        searchValue: form.searchForm
    }
}


export default reduxForm({
    form: 'searchForm'
})(connect(mapStateToProps, actions)(Search));