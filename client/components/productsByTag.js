import React from 'react'
import {getTagProduct} from '../store/products'
import {connect} from 'react-redux'
import OneProduct from './individualprod'
import {Link} from 'react-router-dom'

export class TaggedProducts extends React.Component {
  componentDidMount() {
    const tag = this.props.match.params.productTag
    this.props.getTagProduct(tag)
  }

  render() {
    let products = this.props.products.product

    return (
      <div>
        <h1> Games by Category:</h1>

        <div>
          <OneProduct products={products} />
        </div>

        {/* <OneProduct products={products} />  */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  getTagProduct: tag => dispatch(getTagProduct(tag))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaggedProducts)
