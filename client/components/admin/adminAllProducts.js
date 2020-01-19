import React from 'react'
import {getAllProducts, deleteProduct} from '../../store/products'
import {connect} from 'react-redux'
import NewboardGameForm from '../NewBoardGameForm'

export class AdminAllProducts extends React.Component {
  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    const allProducts = this.props.products.products
    return (
      <div>
        <h3>Products:</h3>
        {allProducts &&
          allProducts.map(product => (
            <div key={product.id}>
              <img src={product.imageUrl} />
              <h4>${product.price}</h4>
              <button
                type="submit"
                onClick={this.props.deleteProduct(product.id)}
              >
                Remove Product
              </button>
            </div>
          ))}
        <div>
          <NewboardGameForm />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts()),
  deleteProduct: product => () => dispatch(deleteProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminAllProducts)
