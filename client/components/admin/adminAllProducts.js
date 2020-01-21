import React from 'react'
import {getAllProducts, deleteProduct} from '../../store/products'
import {connect} from 'react-redux'
import NewBoardGameForm from './NewBoardGameForm'
import UpdateProduct from './updateProduct'
import {Link} from 'react-router-dom'

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
              <h4>${product.price / 100}</h4>
              <button
                type="submit"
                onClick={this.props.deleteProduct(product.id)}
              >
                Remove Product
              </button>
              <Link to={`/products/update/${product.id}`}>Update Product</Link>
            </div>
          ))}
        <div>
          <NewBoardGameForm />
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
