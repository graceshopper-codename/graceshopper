import React from 'react'
import {getAllProducts} from '../store/reducer'
import {connect} from 'react-redux'

export class AllProducts extends React.Component {
  //   constructor(){
  //       super()
  //   }

  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    let products = this.props.products

    return (
      <div>
        <h1>Products:</h1>{' '}
        {products &&
          products.map(product => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.imageUrl} />
              <h4>{product.price}</h4>
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
