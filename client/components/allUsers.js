import React from 'react'
import {allUsers, deleteUser} from '../store/user'
import {connect} from 'react-redux'

export class Users extends React.Component {
  componentDidMount() {
    this.props.allUsers()
  }

  render() {
    const users = this.props.user.users

    return (
      <div>
        <h1>AllUsers:</h1>
        {users &&
          users.map(user => (
            <div key={user.id}>
              <h4>{user.email}</h4>
              <button type="submit" onClick={this.props.deleteUser(user.id)}>
                Remove
              </button>
            </div>
          ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  allUsers: () => dispatch(allUsers()),
  deleteUser: user => () => dispatch(deleteUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
