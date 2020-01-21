import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const STRIPE_PUBLISHABLE = 'pk_test_L3Vq2Zgcq1RdL3ss2kPjQfwv000PVzD9jp'
const PAYMENT_SERVER_URL = process.env.PORT || 8080
const CURRENCY = 'USD'

// const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful')
}

const errorPayment = data => {
  alert('Payment Error')
}

const onToken = (amount, description) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: amount
    })
    .then(successPayment)
    .catch(errorPayment)

const stripeCheckout = ({name, description, amount}) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={amount}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
)

export default stripeCheckout
