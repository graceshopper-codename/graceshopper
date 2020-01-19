import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class CompletedOrder extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>CRITICAL SUCCESS!!!</h1>

        <p>
          You have new games on the way! Our team can't wait to ship them your
          way ASAP. In the meantime keep track of all your orders on{' '}
          <Link to="/account">your account page!</Link>
        </p>
      </div>
    )
  }
}

export default CompletedOrder
