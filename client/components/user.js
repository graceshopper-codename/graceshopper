import React from 'react'
import {me} from '../store/user'
import {connect} from 'react-redux'

export class User extends React.Component {
  componentDidMount() {
    this.props.me()
  }
  render() {
    const user = this.props.user
    console.log(user)
    return <h4>Accout email: {user.email}</h4>
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  me: () => dispatch(me())
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
