import React from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

export default class Cart extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  async componentDidMount() {
    let cart = await Axios.get('/api/cart')
    console.log('data', cart)
    console.log(cart.data === '')
    if (cart.data !== '') {
      this.setState(cart.data)
    }
    console.log('this state', this.state)
  }

  render() {
    console.log('STATE', this.state)
    return (
      <div>
        <h1>Your Cart:</h1>
        {this.state.items ? (
          <div>
            <ul>
              {this.state.items.map(item => (
                <li key={item.id}>
                  {item.title} {item.qty} {item.price}
                </li>
              ))}
            </ul>
            Total: {this.state.total}
          </div>

        ) : (
          <div>Please add items to cart</div>
        )}
        <Link to="/cart/checkoutform">Checkout</Link>

      </div>
    )
  }
}
