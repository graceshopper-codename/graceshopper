import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCart} from '../store/cart'

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.props.getCart()
  }

  render() {
    let cartItems = this.props.cart
    return (
      <div>
        <h1>Your Cart:</h1>
        {cartItems ? (
          <div>
            <ul>
              {cartItems.map(item => (
                <li key={item.productId}>
                  {item.productId} {item.quantity} {item.purchaseCost}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>Please add items to cart</div>
        )}
        <Link to="/cart/checkout">Checkout</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
