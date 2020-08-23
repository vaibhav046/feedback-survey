import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

export class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name="Emaily"
                description="$50 for 50 email credits"
                amount={5000}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY ? process.env.REACT_APP_STRIPE_KEY : 'test_key'}>
                <button className="btn-flat">
                    Add Credits
                </button>
            </StripeCheckout>
        )
    }
}


export default connect(null, actions)(Payments);