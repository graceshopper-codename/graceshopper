import React from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

export default class Cart extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  async componentDidMount() {
    let {data} = await Axios.get('/api/cart')
    console.log('data', data)
    if (this.data) {
      this.setState(data)
    }
  }

  render() {
    console.log('STATE', this.state)
    return (
      <div>
        <h1>Your Cart:</h1>
        {/* {this.state ? (
          <ul>{this.state.map(item => <li key={item.id}>{item.title}</li>)}</ul>
        ) : (
          <div>Please add items to cart</div>
        )} */}
        <Link to="/cart/CheckoutForm">Checkout</Link>
      </div>
    )
  }
}
