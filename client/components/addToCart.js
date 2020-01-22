import React from 'react'
import {addingToCart} from '../store/cart'
import {connect} from 'react-redux'

const AddToCart = props => {
  return (
    <button
      className="add-cart-button"
      onClick={() => props.addingToCart(props.product, props.quantity)}
      type="submit"
    >
      Buy me!
    </button>
  )
}

const mapStateToProps = (state, ownProps) => ({
  product: ownProps.product,
  quantity: ownProps.quantity
})

const mapDispatchToProps = dispatch => ({
  addingToCart: (product, quantity) => dispatch(addingToCart(product, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)
