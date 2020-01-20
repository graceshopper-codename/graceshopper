import React from 'react'
import {connect} from 'react-redux'
import {updatingCart} from '../store/cart'

class CartQuantityForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: 0}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({value: this.props.item.quantity})
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updatingCart(this.props.cartItem, this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          type="number"
          min={0}
        />
        <button type="submit">Update</button>
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  cartItem: ownProps.item
})

const mapDispatchToProps = dispatch => ({
  updatingCart: (cartItem, quantity) =>
    dispatch(updatingCart(cartItem, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartQuantityForm)
