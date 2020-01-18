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
    let cartItems = this.props.cart
    return (
      <div>
        <h1>Your Cart:</h1>
        {cartItems ? (
          <table className="cart">
            <thead>
              <tr>
                <td>Item</td>
                <td>Quantity</td>
                <td>Price</td>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.productId} className="cart-item">
                  <td> {item.productTitle} </td>
                  <td>{item.quantity} </td>
                  <td>{item.purchaseCost / 100}</td>
                  <td>
                    <button
                      type="submit"
                      onClick={this.props.deletingTheItem(item.productId)}
                    >
                      {' '}
                      Remove Item
                    </button>
                  </td>
                </tr>
              ))}
              <tr />
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <Link to="/cart/checkout">Checkout</Link>
                </td>
              </tr>
            </tfoot>
          </table>
        ) : (
          <div>Please add items to cart</div>
        )}
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
