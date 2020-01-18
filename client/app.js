import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {
  Navbar,
  AllProducts,
  Cart,
  SingleProduct,
  AdminView,
  Checkout
} from './components'
import {HomePage} from './components/homepage'
import Routes from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Navbar} />
        <Route path="/" component={Routes} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route exact path="/cart/checkout" component={Checkout} />
        <Route path="/admin" component={AdminView} />
      </div>
    </BrowserRouter>
  )
}

export default App
