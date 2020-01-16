import React from 'react'
import {me} from '../store/user'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const Admin = props => {
  let allUsers
  const user = props.user
  if (user.isAdmin) {
    allUsers = <h1>Im an admin</h1>
  }

  return (
    <div>
      <Link to="/users">{allUsers}</Link>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  me: () => dispatch(me())
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
