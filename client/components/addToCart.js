import React from 'react'

const AddToCart = props => {
  console.log('HI', props)
  return (
    <>
      <button
        onClick={() =>
          props.add({
            qty: 1,
            product_id: product.id
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
