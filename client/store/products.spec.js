import {expect} from 'chai'
import {getAllProducts, getTagProduct} from './products'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const state = {product: []}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(state)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('allProducts', () => {
    it('displays all products', async () => {
      const products = [
        {id: 1, title: 'test', price: 50, tag: 'family'},
        {id: 2, title: 'test2', price: 100, tag: 'party'}
      ]
      mockAxios.onGet('/api/products').replyOnce(200, products)
      await store.dispatch(getAllProducts())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('ALL_PRODUCTS')
      expect(actions[0].products).to.be.deep.equal(products)
    })
  })

  describe('tagItems', () => {
    it('Returns all items with the specific tag', async () => {
      const products = [
        {id: 1, title: 'test', price: 50, tag: 'family'},
        {id: 2, title: 'test2', price: 100, tag: 'party'}
      ]
      mockAxios.onGet('/api/products/tag/Family').replyOnce(200, products[1])
      await store.dispatch(getTagProduct('Family'))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('TAG_PRODUCTS')
      expect(actions[0].product).to.be.deep.equal(products[1])
    })
  })
})
