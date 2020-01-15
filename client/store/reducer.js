import axios from 'axios'
import history from '../history'
// import {combineReducers} from 'redux'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const CREATE_ORDER = 'CREATE_ORDER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const createOrder = order => ({type: CREATE_ORDER, order})

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

export const purchase = order => {
  return async dispatch => {
    const data = await Axios.post('/api/cart', order)
    dispatch(createOrder(data))
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

const manageOrder = (state = [], action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return action.order
    default:
      return state
  }
}

// const reducer = combineReducers({
//   user: manageUsers,
//   products: manageProducts,
//   order: manageOrder
// })
export default manageUsers
