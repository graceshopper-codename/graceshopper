import React, {Component} from 'react'
import {connect} from 'react-redux'
import {purchase} from '../../store/orders'
import {Redirect} from 'react-router-dom'

let defaultState = {
  name: '',
  address: '',
  payment: 'Credit Card',
  userId: '',
  submitted: true
}

class CheckoutForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      address: '',
      payment: 'Credit Card',
      userId: '',
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let form = Object.assign({}, this.state)
    form.userId = this.props.userId
    this.props.purchase(form)
    this.setState(defaultState)
  }

  render() {
    let disabled = !(this.state.address && this.state.name)
    let nameWarning = this.state.name ? (
      ' '
    ) : (
      <span className="warning">Name is Required</span>
    )
    let addressWarning = this.state.address ? (
      ' '
    ) : (
      <span className="warning">Address is Required</span>
    )
    return (
      <>
        {this.state.submitted ? (
          <Redirect to="/cart/checkout/complete" />
        ) : null}
        <div className="form-container">
          <form className="checkout-form" onSubmit={this.handleSubmit}>
            <label htmlFor="name"> Name: {nameWarning}</label>
            <br />
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="address"> Address: {addressWarning} </label>
            <br />
            <input
              name="address"
              type="text"
              value={this.state.address}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="payment"> Payment: </label>
            <br />
            <select
              name="payment"
              type="text"
              value={this.state.payment}
              onChange={this.handleChange}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Paypal">Paypal</option>
              <option value="Other">Other</option>
            </select>
            <button type="submit" disabled={disabled}>
              Submit
            </button>
          </form>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    purchase: order => dispatch(purchase(order))
  }
}

export default connect(null, mapDispatchToProps)(CheckoutForm)
