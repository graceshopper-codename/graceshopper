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
    console.log(this.props)
    let products = this.props.products.product
    console.log('PROD', products)

    return (
      <div>
        <h1>Games by tag </h1>

        <div>
          <OneProduct products={products} />
        </div>

        <div>
          <h1>loading</h1>
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
