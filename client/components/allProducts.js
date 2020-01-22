import React from 'react'
import {getAllProducts} from '../store/products'
import {connect} from 'react-redux'
import OneProduct from './individualprod'
import TagList from './tagList'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    let products = this.props.products.products

    return (
      <div>
        <TagList />
        <div className="all-products">
          <h1>Products:</h1>
          {products && <OneProduct products={products} />}
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
