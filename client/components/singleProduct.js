import React from 'react'
import {getSingleProduct} from '../store/product'
import {connect} from 'react-redux'
import AddToCart from './addToCart'
import {Link} from 'react-router-dom'

export class SingleProduct extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getSingleProduct(id)
  }

  render() {
    const product = this.props.product.product

    return (
      <div className="single-prod-page">
        {product && (
          <div>
            <h1>{product.title}</h1>
            <img src={product.imageUrl} />
            <h4>{product.description}</h4>

            <h3>${product.price / 100}</h3>
            <h4>
              Tag:{' '}
              <Link to={`/products/tag/${product.type}`}>{product.type}</Link>
            </h4>
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
  product: state.product
})

const mapDispatchToProps = dispatch => ({
  getSingleProduct: product => dispatch(getSingleProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
