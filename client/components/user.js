import React from 'react'
import {me} from '../store/user'
import {connect} from 'react-redux'

class User extends React.Component {
  componentDidMount() {
    this.props.me()
  }
  render() {
    const user = this.props.user
    return (
      <div>
        <h4>Account email: {user.email}</h4>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  me: () => dispatch(me())
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
