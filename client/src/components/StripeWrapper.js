import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class StripeWrapper extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily" //can be the name of the app
        description="5usd for trying"
        amount={500} //5 cents x 100 in us dolar = 5 usd
        // currency={eur}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(StripeWrapper);
