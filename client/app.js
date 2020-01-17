import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Navbar} from './components'
import Routes from './routes'
// import {AllProducts, Cart, SingleProduct, AdminView, Checkout} from './components/index'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Navbar} />
        <Route path="/" component={Routes} />
      </div>
    </BrowserRouter>
  )
}

export default App
