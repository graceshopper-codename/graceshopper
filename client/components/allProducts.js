import React from 'react'
import {getAllProducts, addingToCart} from '../store/reducer'
import {connect} from 'react-redux'
import axios from 'axios'

export class AllProducts extends React.Component {
  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
  }

  async addToCart(item) {
    const result = await axios.post('/api/cart', item)
    console.log('item', item)
    console.log('result.data', result.data)
    return result.data
  }

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
                onClick={() =>
                  this.addToCart({
                    qty: 1,
                    product_id: product.id
                  })
                }
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
  getAllProducts: () => dispatch(getAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
