import axios from 'axios'

//Action Types

const CREATE_ORDER = 'CREATE_ORDER'

//Action Creators

const createOrder = order => ({type: CREATE_ORDER, order})

//Thunk Creators

export const purchase = order => {
  return async dispatch => {
    try {
      const data = await axios.post('/api/cart', order)
      dispatch(createOrder(data))
    } catch (err) {
      console.erroor(err)
    }
  }
}

//Reducers

const manageOrders = (state = [], action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return action.order
    default:
      return state
  }
}

export default manageOrders
