import React from 'react'
import {getSingleProduct} from '../store/products'
import {connect} from 'react-redux'
import AddToCart from './addToCart'
import {Link} from 'react-router-dom'

export class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
  }

  async addToCart(item) {
    const result = await axios.post('/api/cart', item)
    return result.data
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getSingleProduct(id)
  }

  render() {
    const product = this.props.products.product
    return (
      <div>
        {product && (
          <div>
            <h1>{product.title}</h1>
            <img src={product.imageUrl} />
            <h4>{product.description}</h4>

            <h3>${product.price}</h3>
            <h4>Tag: {product.type}</h4>
          </div>
        )}
        <AddToCart product={product} add={this.addToCart} />
        <p />
        <Link to="/products">Return to all products</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  getSingleProduct: product => dispatch(getSingleProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
