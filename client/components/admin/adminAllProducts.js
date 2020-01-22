import React from 'react'
import {getAllProducts, deleteProduct} from '../../store/products'
import {connect} from 'react-redux'
import NewBoardGameForm from './NewBoardGameForm'
import {Link} from 'react-router-dom'
import UpdateProduct from './updateProduct'

export class AdminAllProducts extends React.Component {
  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    const allProducts = this.props.products.products
    console.log(allProducts)
    return (
      <div className="admin-products-container">
        <div>
          <h3>Products:</h3>
        </div>
        <div className="admin-prod">
          {allProducts &&
            allProducts.map(product => (
              <div className="row-padding">
                <div className="admin-single-prod" key={product.id}>
                  <div className="admin-prod-info">
                    <h3>{product.title}</h3>
                    <h4>Tag: {product.type}</h4>
                    <h4>${product.price / 100}</h4>
                    <button
                      type="submit"
                      onClick={this.props.deleteProduct(product.id)}
                    >
                      Remove Product
                    </button>
                  </div>
                  <img src={product.imageUrl} />
                  <div className="form-container">
                    <p>Update Game Information:</p>
                    <UpdateProduct id={product.id} />
                  </div>
                  {/* <Link to={`/products/update/${product.id}`}>Update Product</Link> */}
                </div>
              </div>
            ))}
        </div>
        <div className="new-game">
          <h2>Add New Game:</h2>
          <div className="row-padding">
            <NewBoardGameForm />
          </div>
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
