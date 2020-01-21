import React from 'react'
import findProductsByTag from '../store/products'
import {connect} from 'react-redux'
import OneProduct from './individualprod'

export class TaggedProducts extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props.match.params.type)
    const tag = this.props.match.params.type
    this.props.findProductsByTag(tag)
  }

  render() {
    let products = this.props.products.products

    return (
      <div>
        <h1>HI</h1>
        <OneProduct products={products} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  findProductsByTag: productTag => dispatch(findProductsByTag(productTag))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaggedProducts)
