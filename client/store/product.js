import axios from 'axios'

const SINGLE_PRODUCT = 'SINGLE_PRODUCT'

const singleProduct = product => ({type: SINGLE_PRODUCT, product})

export const getSingleProduct = product => {
  return async dispatch => {
    try {
      const result = await axios.get(`/api/products/${product}`)
      dispatch(singleProduct(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

const manageProduct = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT:
      return action

    default:
      return state
  }
}

export default manageProduct
