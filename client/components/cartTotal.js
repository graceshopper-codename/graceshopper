import React from 'react'
import {getCart} from '../store/cart'
import {connect} from 'react-redux'

export class CartTotal extends React.Component {
  componentDidMount() {
    this.props.getCart()
  }

  render() {
    let total = 0
    let cart = this.props.cart
    if (cart) {
      for (let i = 0; i < cart.length; i++) {
        total += cart[i].quantity
      }
      return <div> {total} </div>
    } else {
      return <div> {total} </div>
    }
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartTotal)
