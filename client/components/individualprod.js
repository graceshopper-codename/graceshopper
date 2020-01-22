import React from 'react'
import {Link} from 'react-router-dom'
import AddToCart from './addToCart'

const OneProduct = props => {
  let products = props.products

  return (
    <div className="products-container">
      {products &&
        products.map(product => (
          <div key={product.id} className="product-container">
            <Link to={`/products/${product.id}`}>
              <div className="product-title">{product.title}</div>
            </Link>
            <img width={300} height={300} src={product.imageUrl} />
            <div className="product-price">
              ${product.price / 100}
              <AddToCart product={product} quantity={1} />
            </div>
          </div>
        ))}
    </div>
  )
}

export default OneProduct
