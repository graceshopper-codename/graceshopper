import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Cart,
  SingleProduct,
  Checkout,
  AdminView,
  Account,
  AllProducts
} from './components'
import CompletedOrder from './components/Checkout/completed'
import HomePage from './components/homepage'
import {me} from './store'
import Admin from './components/admin/admin'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    // const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/account" component={Account} />
        <Route path="/home" component={HomePage} />
        <Route path="/cart/checkout/complete" component={CompletedOrder} />
        {/* <Route path="/signup" component={Signup} /> */}
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/products/" component={AllProducts} />
        <Route path="/cart/checkout" component={Checkout} />
        <Route path="/cart" component={Cart} />
        <Route path="/users" component={Admin} />
        <Route path="/admin" component={AdminView} /> */}
        {/* Routes placed here are only available after logging in


        {/* {isLoggedIn && (
          <Switch>
            <Route path="/home" component={UserHome} />
          </Switch>
        )} */}
        {/* Displays our Login component as a fallback */}
        {/* <Route component={Login} /> */}
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    // isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired
  // isLoggedIn: PropTypes.bool.isRequired
}
