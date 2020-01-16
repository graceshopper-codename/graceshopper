import axios from 'axios'
import history from '../history'

// ACTION TYPES

const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const GET_ALL_USERS = 'GET_ALL_USERS'
const DELETE_USER = 'DELETE_USER'

// INITIAL STATE

const defaultUser = {}

// ACTION CREATORS

const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const getAllUsers = users => ({type: GET_ALL_USERS, users})
const deletingUser = (user, userId) => ({type: DELETE_USER, user, userId})

// THUNK CREATORS

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

export const allUsers = () => {
  return async dispatch => {
    try {
      const result = await axios.get('api/users')
      dispatch(getAllUsers(result.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const deleteUser = user => {
  return async dispatch => {
    try {
      const result = await axios.delete(`/api/users/${user}`)
      dispatch(deletingUser(result.data, user))
    } catch (err) {
      console.error(err)
    }
  }
}

// REDUCER

const manageUsers = (state = defaultUser, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case GET_ALL_USERS:
      return action
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => {
          return user.id !== action.userId
        })
      }
    default:
      return state
  }
}

export default manageUsers
