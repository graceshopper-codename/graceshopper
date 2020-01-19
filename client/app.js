import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Navbar, AllProducts} from './components'
import {HomePage} from './components/homepage'
import Routes from './routes'
import {Footer} from './components/footer/footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-app">
        <Route path="/" component={Navbar} />
        <Route path="/" component={Routes} />
        <Route exact path="/" component={AllProducts} />
        <Route path="/" component={Footer} />
      </div>
    </BrowserRouter>
  )
}

export default App
