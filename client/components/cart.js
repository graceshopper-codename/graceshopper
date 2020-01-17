import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCart, deletingTheItem} from '../store/cart'

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.props.getCart()
  }

  render() {
    console.log(this.props)
    let cartItems = this.props.cart
    return (
      <div>
        <h1>Your Cart:</h1>
        {cartItems ? (
          <div>
            <ul>
              {cartItems.map(item => (
                <li key={item.productId}>
                  <h1>{item.productId}</h1>
                  {item.productId} {item.quantity} {item.purchaseCost}
                  <button
                    type="submit"
                    onClick={this.props.deletingTheItem(item.productId)}
                  >
                    Remove Item
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>Please add items to cart</div>
        )}
        <Link to="/cart/checkoutform">Checkout</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart()),
  deletingTheItem: item => () => dispatch(deletingTheItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
