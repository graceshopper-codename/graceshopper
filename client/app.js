import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Navbar, AllProducts} from './components'
import Routes from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Navbar} />
        <Route path="/" component={Routes} />
        <Route exact path="/" component={AllProducts} />
      </div>
    </BrowserRouter>
  )
}

export default App
