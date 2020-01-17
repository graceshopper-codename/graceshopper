import React from 'react'

const AddToCart = props => {
  return (
    <>
      <button
        onClick={() =>
          props.add({
            qty: 1,
            product_id: props.product.id
          })
        }
        type="submit"
      >
        Add To Cart
      </button>
    </>
  )
}

export default AddToCart
