import axios from 'axios'

//Action Types

const GET_CART = 'GET_CART'

//Action Creators

const viewCart = items => ({type: GET_CART, items: items})

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

//Reducer
const manageCart = (state = [], action) => {
  switch (action.type) {
    case GET_CART:
      return action.items
    default:
      return state
  }
}

export default manageCart
