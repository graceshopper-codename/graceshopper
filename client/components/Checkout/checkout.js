import React from 'react'
import {me} from '../../store/user'
import {connect} from 'react-redux'
import StripeCheckout from './stripe-checkout'

class Checkout extends React.Component {
  componentDidMount() {
    this.props.me()
  }

  render() {
    const userEmail = this.props.user.email
    const total = this.props.cartItems.reduce(
      (acc, item) => acc + item.quantity * item.purchaseCost,
      0
    )
    const orderId = this.props.cartItems[0].orderId
    return (
      <div>
        <StripeCheckout amount={total} orderId={orderId} email={userEmail} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  me: () => dispatch(me())
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
