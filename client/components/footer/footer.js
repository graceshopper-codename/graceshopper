import React from 'react'
import {Link} from 'react-router-dom'

export class Footer extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/about">
            <h6>About</h6>
          </Link>
          <Link to="/returns">
            <h6>Returns</h6>
          </Link>
          <Link to="/contactUs">
            <h6>Contact Us</h6>
          </Link>
          <Link to="/storeHours">
            <h6>Store Hours</h6>
          </Link>
          <Link to="/storeLocations">
            <h6>Store Locations</h6>
          </Link>
        </div>
        <div>
          <img
            src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png"
            height="50"
          />
          <img
            src="https://seeklogo.net/wp-content/uploads/2015/11/twitter-logo.png"
            height="50"
          />
          <img
            src="https://seeklogo.com/images/F/facebook-icon-logo-C61047A9E7-seeklogo.com.png"
            height="50"
          />
          <img
            src="http://logovector.net/wp-content/uploads/2014/02/Pinterest-badge-195x195.png"
            height="50"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/snapchat.svg"
            height="50"
          />
        </div>
      </div>
    )
  }
}
