import React from 'react'
import {getAllProducts} from '../../store/products'
import {connect} from 'react-redux'

export class AdminAllProducts extends React.Component {
  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    const allProducts = this.props.products.products
    return (
      <div>
        <h1>Products:</h1>
        {allProducts &&
          allProducts.map(product => (
            <div key={product.id}>
              <img src={product.imageUrl} />
              <h4>${product.price}</h4>
            </div>
          ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminAllProducts)
