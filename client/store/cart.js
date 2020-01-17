import axios from 'axios'

//Action Types

const GET_CART = 'GET_CART'
const DELETE_ITEM = 'DELETE_ITEM'

//Action Creators

const viewCart = items => ({type: GET_CART, items: items})
const deletingItem = (item, itemId) => ({type: DELETE_ITEM, item, itemId})

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

export const deletingTheItem = itemId => {
  return async dispatch => {
    try {
      const result = await axios.delete(`/api/cart/items/${itemId}`)
      dispatch(deletingItem(result.data, itemId))
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
      return {
        ...state,
        cart: state.items.filter(item => {
          return item.id !== 3
        })
      }
    default:
      return state
  }
}

export default manageCart
