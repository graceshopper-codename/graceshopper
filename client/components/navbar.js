import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
// import CartTotal from '../components/cartTotal'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div id="nav-bar-container">
    <div id="site-name">
      <Link to="/">CODENAMES</Link>
    </div>
    <nav id="nav-bar">
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/account">Account</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/account">Login/Signup</Link>
        </div>
      )}
      <div>
        <Link to="/products">All Products</Link>
      </div>

      <div id="cart">
        <Link to="/cart">
          <img
            height={50}
            width={50}
            src="https://assets1.risnews.com/styles/content_sm/s3/2018-04/shopping-cart.png?itok=LUk_XbaE"
          />
          {/* <CartTotal /> */}
        </Link>
      </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
