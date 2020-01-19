import React from 'react'
import {getAllProducts} from '../store/products'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import AddToCart from './addToCart'

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
    console.log(this.props)
    this.props.getAllProducts()
  }

  render() {
    let products = this.props.products.products

    return (
      <div className="all-products">
        <h1>Products:</h1>
        <div className="products-container">
          {products &&
            products.map(product => (
              <div key={product.id} className="product-container">
                <Link to={`products/${product.id}`}>
                  <div className="product-title">{product.title}</div>
                </Link>
                <img width={300} height={300} src={product.imageUrl} />
                <div className="product-price">
                  ${product.price / 100}
                  <AddToCart product={product} add={this.addToCart} />
                </div>
              </div>
            ))}
        </div>
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
