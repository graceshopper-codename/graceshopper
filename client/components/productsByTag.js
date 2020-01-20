import React from 'react'
import {findProductsByTag} from '../store/products'
import {connect} from 'react-redux'
import AddToCart from './addToCart'
import {Link} from 'react-router-dom'

export class TaggedProducts extends React.Component {
  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
  }

  async addToCart(item) {
    const result = await axios.post('/api/cart', item)
    return result.data
  }

  componentDidMount() {
    const tag = this.props.match.params.type
    this.props.findProductsByTag(tag)
  }

  render() {
    const product = this.props.products.product
    const tag = this.props.products.product.type

    return (
      <div>
        {product && (
          <div>
            <h1>{product.title}</h1>
            <img src={product.imageUrl} />
            <h4>{product.description}</h4>

            <p> Tag: {product.type}</p>
            <h3>${product.price / 100}</h3>
          </div>
        )}
        <AddToCart product={product} add={this.addToCart} />
        <p> </p>
        <Link to="/products">Return to all products</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  findProductsByTag: tag => dispatch(findProductsByTag(tag))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaggedProducts)
