import axios from 'axios'

const SINGLE_PRODUCT = 'SINGLE_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

const singleProduct = product => ({type: SINGLE_PRODUCT, product})
const updatingProduct = product => ({type: UPDATE_PRODUCT, product})

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
export const updateProduct = (update, product) => {
  return async dispatch => {
    try {
      console.log(update)
      const result = await axios.put(`/api/products/${product}`, update)
      dispatch(updatingProduct(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

const manageProduct = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT:
      return action
    case UPDATE_PRODUCT:
      return action
    default:
      return state
  }
}

export default manageProduct
