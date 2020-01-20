import axios from 'axios'

//Action Types
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_ITEM = 'DELETE_ITEM'
const ORDER_HISTORY = 'ORDER_HISTORY'

//Action Creators
const viewCart = items => ({type: GET_CART, items})
const deleteItem = items => ({type: DELETE_ITEM, items})
const completedOrders = items => ({type: ORDER_HISTORY, items})
const addToCart = items => ({type: ADD_TO_CART, items})

//Thunk Creator
export const getCart = () => {
  return async dispatch => {
    try {
      const result = await axios.get('/api/cart')
      dispatch(viewCart(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const orderHistory = () => {
  return async dispatch => {
    try {
      const result = await axios.get('/api/cart/history')
      dispatch(completedOrders(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const deletingTheItem = itemId => {
  return async dispatch => {
    try {
      await axios.delete(`/api/cart/${itemId}`)
      const result = await axios.get('/api/cart')
      dispatch(deleteItem(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const addingToCart = (product, quantity) => {
  return async dispatch => {
    try {
      await axios.post('/api/cart', {product, quantity})
      const result = await axios.get('/api/cart')
      dispatch(addToCart(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

//Reducer
const manageCart = (state = [], action) => {
  switch (action.type) {
    case GET_CART:
      return action.items
    case DELETE_ITEM:
      return action.items
    case ORDER_HISTORY:
      return action.items
    case ADD_TO_CART:
      return action.items
    default:
      return state
  }
}

export default manageCart
