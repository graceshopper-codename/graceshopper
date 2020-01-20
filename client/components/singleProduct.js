import React from 'react'
import {getSingleProduct} from '../store/products'
import {connect} from 'react-redux'
import AddToCart from './addToCart'

export class SingleProduct extends React.Component {
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
            <h4>{product.type}</h4>
            <h4>${product.price / 100}</h4>
          </div>
        )}
        <AddToCart product={product} />
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
