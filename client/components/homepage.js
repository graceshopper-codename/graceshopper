import React from 'react'
import {showSales} from '../store/products'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import AddToCart from './addToCart'
import OneProduct from './individualprod'

export class HomePage extends React.Component {
  constructor() {
    super()
    this.addToCart = this.addToCart.bind(this)
  }

  async addToCart(item) {
    const result = await axios.post('/api/cart', item)
    return result.data
  }

  componentDidMount() {
    console.log(this.props)
    this.props.showSales()
  }

  render() {
    console.log(this.props)
    let products = this.props.products.products

    return (
      <div>
        <h2>Welcome to Codenames!</h2>

        <p>
          We're proud to be the best online retailer for board games! No matter
          what type of game you like, or who you're playing with - you'll be
          able to find exactly what you're looking for in our store.
        </p>

        <h1>Current Sale Items:</h1>
        <OneProduct products={products} addToCart={this.addToCart} />
        {/* {products &&
          products.map(product => (
            <div key={product.id}>
              <Link to={`products/${product.id}`}>
                <h3>{product.title}</h3>{' '}
              </Link>
              <img src={product.imageUrl} />
              <h4>${product.price}</h4>

              <AddToCart product={product} add={this.addToCart} />
            </div>
          ))} */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  showSales: () => dispatch(showSales())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
