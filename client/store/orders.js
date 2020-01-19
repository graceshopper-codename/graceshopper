import axios from 'axios'

//Action Types

const COMPLETE_ORDER = 'COMPLETE_ORDER'

//Action Creators

const completeOrder = order => ({type: COMPLETE_ORDER, order})

//Thunk Creators

export const purchase = order => {
  return async dispatch => {
    try {
      console.log('ORDER', order)
      const {data} = await axios.put('/api/cart/checkout', order)
      dispatch(completeOrder(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//Reducers

const manageOrders = (state = [], action) => {
  switch (action.type) {
    case COMPLETE_ORDER:
      return action.order

    default:
      return state
  }
}

export default manageOrders
