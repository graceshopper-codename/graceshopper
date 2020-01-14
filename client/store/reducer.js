import axios from 'axios'
import history from '../history'
import {combineReducers} from 'redux'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const ALL_PRODUCTS = 'ALL_PRODUCTS'
const ADD_TO_CART = 'ADD_TO_CART^'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const viewProducts = products => ({type: ALL_PRODUCTS, products})
const addItem = item => ({type: ADD_TO_CART, item})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const getAllProducts = () => {
  return async dispatch => {
    const result = await axios.get('/api/products')
    dispatch(viewProducts(result.data))
  }
}

export const addingToCart = item => {
  return async dispatch => {
    const result = await axios.post('/api/cart', item)
    dispatch(addItem(result))
  }
}

/**
 * REDUCER
 */
const manageUsers = (state = defaultUser, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}

const manageProducts = (state = [], action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return action.products
    default:
      return state
  }
}

const reducer = combineReducers({user: manageUsers, products: manageProducts})
export default reducer
