import React from 'react'
import {getSingleProduct} from '../store/reducer'
import {connect} from 'react-redux'

export class SingleProduct extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getSingleProduct(id)
  }
  render() {
    const product = this.props.products.product
    console.log(product)
    return (
      <div>
        {product && (
          <div>
            <h1>{product.title}</h1>
            <img src={product.imageUrl} />
            <h4>{product.description}</h4>
            <h4>{product.type}</h4>
            <h4>${product.price}</h4>
          </div>
        )}
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
