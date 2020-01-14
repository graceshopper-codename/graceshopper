import React from 'react'
import {Link} from 'react-router-dom'
// import { connect } from 'react-redux'

export class Cart extends React.Component {
  render() {
    return (
      <div>
        <h1>Your Cart:</h1>
        <h4>**Will show cart items here once set up**</h4>
        <h5>Subtotal:</h5>
        <Link to="/cart/checkoutform">Checkout</Link>
      </div>
    )
  }
}
