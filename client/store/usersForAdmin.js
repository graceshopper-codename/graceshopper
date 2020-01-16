import axios from 'axios'

const GET_ALL_USERS = 'GET_ALL_USERS'
const DELETE_USER = 'DELETE_USER'

const getAllUsers = users => ({type: GET_ALL_USERS, users})
const deletingUser = (users, userId) => ({type: DELETE_USER, users, userId})

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
const manageUsersForAdmin = (state = [], action) => {
  switch (action.type) {
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

export default manageUsersForAdmin
