import React from 'react'
import {getAllProducts} from '../store/products'
import {connect} from 'react-redux'
import axios from 'axios'
import OneProduct from './individualprod'

class AllProducts extends React.Component {
  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
  }

  async addToCart(item) {
    const result = await axios.post('/api/cart', item)
    return result.data
  }

  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    let products = this.props.products.products

    return (
      <div className="all-products">
        <h1>Products:</h1>
        <OneProduct products={products} addToCart={this.addToCart} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
