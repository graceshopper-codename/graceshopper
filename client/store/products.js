import axios from 'axios'

//Action Types
const ALL_PRODUCTS = 'ALL_PRODUCTS'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const SALE_PRODUCTS = 'SALE_PRODUCTS'
const TAG_PRODUCTS = 'TAG_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'

//Action Creators
const viewProducts = products => ({type: ALL_PRODUCTS, products})
const deletingProduct = productId => ({type: DELETE_PRODUCT, productId})
const saleProducts = products => ({type: SALE_PRODUCTS, products})
const tagProducts = product => ({type: TAG_PRODUCTS, product})
const addNewProduct = product => ({type: ADD_PRODUCT, product})

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

export const getTagProduct = product => {
  return async dispatch => {
    try {
      const result = await axios.get(`/api/products/tag/${product}`)
      dispatch(tagProducts(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const deleteProduct = product => {
  return async dispatch => {
    try {
      await axios.delete(`/api/products/${product}`)
      dispatch(deletingProduct(product))
    } catch (err) {
      console.error(err)
    }
  }
}

export const showSales = () => {
  return async dispatch => {
    try {
      const result = await axios.get('/api/products/sale')
      dispatch(saleProducts(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const addProduct = product => {
  return async dispatch => {
    try {
      const result = await axios.post('/api/products', product)
      dispatch(addNewProduct(result.data))
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
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, ...action.product]
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => {
          return product.id !== action.productId
        })
      }
    case SALE_PRODUCTS:
      return action
    case TAG_PRODUCTS:
      return action
    default:
      return state
  }
}

export default manageProducts
