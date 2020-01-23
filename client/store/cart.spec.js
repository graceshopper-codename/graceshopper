import {expect} from 'chai'
import {orderHistory, getCart} from './cart'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const state = {cart: []}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(state)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('orders', () => {
    it('displays all orders', async () => {
      const orders = [
        {
          orderId: 3,
          productId: 1,
          productTitle: 'Everdell',
          quantity: 1,
          purchaseCost: 2015
        },
        {
          orderId: 3,
          productId: 2,
          productTitle: 'Spirit Island',
          quantity: 1,
          purchaseCost: 7899
        }
      ]
      mockAxios.onGet('/api/cart/history').replyOnce(200, orders)
      await store.dispatch(orderHistory())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('ORDER_HISTORY')
      expect(actions[0].items).to.be.deep.equal(orders)
    })
  })

  describe('getCart', () => {
    it('Returns order history for a specific users', async () => {
      const cart = [
        {
          orderId: 4,
          productId: 1,
          productTitle: 'Everdell',
          quantity: 2,
          purchaseCost: 2015
        },
        {
          orderId: 4,
          productId: 2,
          productTitle: 'Spirit Island',
          quantity: 4,
          purchaseCost: 7899
        }
      ]
      mockAxios.onGet('/api/cart').replyOnce(200, cart)
      await store.dispatch(getCart())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_CART')
      expect(actions[0].items).to.be.deep.equal(cart)
    })
  })
})
