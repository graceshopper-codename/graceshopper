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
          <h1>Products:</h1>
        </div>
        <div className="admin-prod">
          {allProducts &&
            allProducts.map(product => (
              <div className="row-padding">
                <div className="admin-single-prod" key={product.id}>
                  <div className="admin-prod-info">
                    <h2>{product.title}</h2>
                    <h4>Type: {product.type}</h4>
                    <h4>Price: {product.price}</h4>
                    <h4>MSRP: {product.MSRP}</h4>
                    <button
                      type="submit"
                      onClick={this.props.deleteProduct(product.id)}
                    >
                      Remove Product
                    </button>
                  </div>
                  <div className="img">
                    <img src={product.imageUrl} />
                  </div>
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
