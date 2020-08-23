import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

export class Header extends Component {


    renderContent() {
        switch (this.props.auth) {
            case null: return;
            case false: return (
                <li><a href="/auth/google">Login with google</a></li>
            );
            default: return [
                <li key="surveys"><Link to={this.props.auth ? '/surveys/new' : '/'}><button className="btn-flat" >
                    Create Surveys </button></Link></li>,
                <li key="payment"><Payments /></li>,
                <li key="credits" style={{ margin: '0 10px' }}>Credits:{this.props.auth.credits}</li>,
                <li key="logout"> <a href="/api/logout">Logout</a> </li>];
        }
    }

    routehandler() {
        this.props.history.push('/surveys/new');
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="brand-logo">Emaily</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav >
        );
    }
}

function mapStatesToProp({ auth }) {
    return { auth }
}

export default connect(mapStatesToProp, null)(Header);