import React from 'react';
import { connect } from 'react-redux';

export const Landing = ({ loggedInUser }) => {

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Emaily</h1>
            <h5>{loggedInUser ? 'User is logged in' : 'Please login to continue'}</h5>
            <p>Come here to collect Feedback!</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.auth
    }
}

export default connect(mapStateToProps, null)(Landing);