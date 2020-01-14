import React from 'react'
import {getAllProducts, addingToCart} from '../store/reducer'
import {connect} from 'react-redux'

export class AllProducts extends React.Component {
  //   constructor(){
  //       super()
  //   }

  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    console.log(this.props)
    let products = this.props.products

    return (
      <div>
        <h1>Products:</h1>
        {products &&
          products.map(product => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.imageUrl} />
              <h4>${product.price}</h4>
              <button
                onClick={this.props.addingToCart({
                  qty: 1,
                  product_id: product.id
                })}
                type="submit"
              >
                Add To Cart
              </button>
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
  getAllProducts: () => dispatch(getAllProducts()),
  addingToCart: (qty, id) => dispatch(addingToCart(qty, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
