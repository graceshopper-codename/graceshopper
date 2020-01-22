import React from 'react'
import {showSales} from '../store/products'
import {connect} from 'react-redux'
import OneProduct from './individualprod'
import TagList from './tagList'

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.showSales()
  }

  render() {
    let products = this.props.products.products

    return (
      <div>
        <h1>Welcome to CODEnames =D</h1>
        <p>
          We're proud to be the best online retailer for board games that was
          created as a project at a coding bootcamp! No matter what type of game
          you like, or who you're playing with - you'll be able to find exactly
          what you're looking for in our store if it's included our seed file!
        </p>
        <TagList />
        <h2>SALE ITEMS:</h2>
        {products && <OneProduct products={products} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  showSales: () => dispatch(showSales())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
