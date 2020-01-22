import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const TagList = props => {
  return (
    <div>
      <h3>Search by Game Type:</h3>
      <div>
        <Link to="/products/tag/Party">
          <button className="button" type="button">
            Party
          </button>
        </Link>
        <></>
        <Link to="/products/tag/Family">
          <button className="button" type="button">
            Family
          </button>
        </Link>
        <></>
        <Link to="/products/tag/Strategy">
          <button className="button" type="button">
            Strategy
          </button>
        </Link>
        <></>
        <Link to="/products/tag/Cooperative">
          <button className="button" type="button">
            Cooperative
          </button>
        </Link>
      </div>
    </div>
  )
}
export default TagList
