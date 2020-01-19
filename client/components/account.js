import React from 'react'
import {connect} from 'react-redux'
import {Login, Signup} from './auth-form'
import UserHome from './user-home'
import {Link} from 'react-router-dom'
import OrderHistory from './orderHistory'

class Account extends React.Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
          <UserHome />
          <OrderHistory />
          <div>
            {this.props.isAdmin && (
              <Link to="/admin"> Admin Functionalities </Link>
            )}
          </div>
          <Link to="/products">Go back to Shopping!</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Login />
          <Signup />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.isAdmin,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  me: () => dispatch()
})

export default connect(mapStateToProps, mapDispatchToProps)(Account)
