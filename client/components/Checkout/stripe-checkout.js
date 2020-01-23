import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import history from '../../history'

const STRIPE_PUBLISHABLE = 'pk_test_L3Vq2Zgcq1RdL3ss2kPjQfwv000PVzD9jp'
const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://codenames-boardgames.herokuapp.com'
    : 'http://localhost:8080'
const AXIOS_URL = PAYMENT_SERVER_URL + '/api/cart/checkout'

const CURRENCY = 'USD'

const errorPayment = data => {
  alert('Payment Error')
}

const onToken = (amount, description, orderId) => async token => {
  try {
    let {data} = axios.post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: amount
    })
    console.log('AXIOS_URL', AXIOS_URL)
    let updatedOrder = await axios.put(AXIOS_URL, {orderId, amount})
    history.push('/cart/checkout/complete')
  } catch (err) {
    errorPayment(err)
  }
}

const stripeCheckout = ({name, email, description, amount, orderId}) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={amount}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
    shippingAddress
    billingAddress
    token={onToken(amount, description, orderId)}
    email={email}
  />
)

export default stripeCheckout
