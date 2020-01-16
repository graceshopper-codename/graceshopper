import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Navbar} from './components'
import Routes from './routes'
import AllProducts from './components/AllProducts'
import {Cart} from './components/cart'
import SingleProduct from './components/singleProduct'
import Checkout from './components/checkout'
import {AdminView} from './components/admin/adminView'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Navbar} />
        <Route path="/" component={Routes} />
        <Route exact path="/" component={AllProducts} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/cart/checkout" component={Checkout} />
        <Route path="/admin" component={AdminView} />
      </div>
    </BrowserRouter>
  )
}

export default App
