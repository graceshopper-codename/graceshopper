import axios from 'axios'

//Action Types

const ALL_PRODUCTS = 'ALL_PRODUCTS'
const SINGLE_PRODUCT = 'SINGLE_PRODUCT'

//Action Creators

const viewProducts = products => ({type: ALL_PRODUCTS, products})
const singleProduct = product => ({type: SINGLE_PRODUCT, product})

//Thunk Creator

export const getAllProducts = () => {
  return async dispatch => {
    try {
      const result = await axios.get('/api/products')
      dispatch(viewProducts(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

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

//Reducer

const manageProducts = (state = [], action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return action
    case SINGLE_PRODUCT:
      return action
    default:
      return state
  }
}

export default manageProducts
