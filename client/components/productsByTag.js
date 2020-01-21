import React from 'react'
import {getTagProduct} from '../store/products'
import {connect} from 'react-redux'
import OneProduct from './individualprod'
import AddToCart from './addToCart'
import {Link} from 'react-router-dom'

export class TaggedProducts extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.addToCart = this.addToCart.bind(this)
  // }

  async addToCart(item) {
    const result = await axios.post('/api/cart', item)
    return result.data
  }

  componentDidMount() {
    console.log(this.props)
    const tag = this.props.match.params.productTag
    this.props.getTagProduct(tag)
  }

  render() {
    const products = this.props.products.product
    console.log('PROD', products)

    return (
      <div>
        <h1>TAG</h1>

        <OneProduct products={products} />
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
