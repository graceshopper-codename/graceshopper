import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import manageUsers from './user'
import manageProducts from './products'
import manageOrders from './orders'
import manageCart from './cart'
import manageUsersForAdmin from './usersForAdmin'

const reducer = combineReducers({
  user: manageUsers,
  products: manageProducts,
  orders: manageOrders,
  cart: manageCart,
  usersForAdmin: manageUsersForAdmin
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
