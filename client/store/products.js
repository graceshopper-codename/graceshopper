import axios from 'axios'

//Action Types
const ALL_PRODUCTS = 'ALL_PRODUCTS'
const SINGLE_PRODUCT = 'SINGLE_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const SALE_PRODUCTS = 'SALE_PRODUCTS'
const TAG_PRODUCTS = 'TAG_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

//Action Creators
const viewProducts = products => ({type: ALL_PRODUCTS, products})
const singleProduct = product => ({type: SINGLE_PRODUCT, product})
const deletingProduct = productId => ({type: DELETE_PRODUCT, productId})
const saleProducts = products => ({type: SALE_PRODUCTS, products})
const tagProducts = productTag => ({type: TAG_PRODUCTS, productTag})
const addNewProduct = product => ({type: ADD_PRODUCT, product})
const updatingProduct = products => ({type: UPDATE_PRODUCT, products})


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

export const getTagProduct = product => {
  return async dispatch => {
    try {
      console.log('IN THE THUNK', productTag)
      const result = await axios.get(`/api/products/tag/${productTag}`)
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


export const updateProduct = (update, product) => {
  return async dispatch => {
    try {
      console.log(update)
      const result = await axios.put(`/api/products/${product}`, update)
      dispatch(updatingProduct(result))
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
    case ADD_PRODUCT:
      state.products.push(action.product)
      return {...state}
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => {
          return product.id !== action.productId
        })
      }
    case SALE_PRODUCTS:
      return action
    case UPDATE_PRODUCT:
    case TAG_PRODUCTS:
      return action
    default:
      return state
  }
}

export default manageProducts
