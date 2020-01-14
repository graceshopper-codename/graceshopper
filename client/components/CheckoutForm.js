import React, {Component} from 'react'

export class CheckoutForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      address: '',
      payment: ''
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
    this.props.handleSubmit(this.state)
    this.setState(defaultState)
  }

  render() {
    return (
      <div className="form-container">
        <form className="checkout-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name"> Name: </label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="address"> Address: </label>
          <input
            name="address"
            type="text"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <label htmlFor="payment"> Payment: </label>
          <input
            name="payment"
            type="text"
            value={this.state.payment}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
