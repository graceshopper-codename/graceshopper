import React from 'react'
import {me} from '../store/user'
import {connect} from 'react-redux'
import CheckoutForm from './CheckoutForm'

export class User extends React.Component {
  componentDidMount() {
    this.props.me()
  }

  render() {
    const userId = this.props.user.id

    return (
      <div>
        <CheckoutForm userId={userId} />
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
