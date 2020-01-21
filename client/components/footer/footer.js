import React from 'react'
import {Link} from 'react-router-dom'

export class Footer extends React.Component {
  render() {
    return (
      <div id="footer-container">
        <div>
          <Link to="/about">About </Link>
        </div>
        <div>
          <Link to="/returns"> Returns </Link>
        </div>
        <div>
          <Link to="/contactUs">Contact Us </Link>
        </div>
        <div>
          <Link to="/storeHours">Store Hours </Link>
        </div>
        <div>
          <Link to="/storeLocations"> Store Locations </Link>
        </div>

        <div>
          <a target="blank" href="https://www.instagram.com/">
            <img
              src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png"
              height="50"
            />
          </a>
          <a target="blank" href="https://twitter.com/codenamesgames">
            <img
              src="https://seeklogo.net/wp-content/uploads/2015/11/twitter-logo.png"
              height="50"
            />
          </a>
          <a target="blank" href="https://www.facebook.com/">
            <img
              src="https://seeklogo.com/images/F/facebook-icon-logo-C61047A9E7-seeklogo.com.png"
              height="50"
            />
          </a>
          <a
            target="blank"
            href="https://www.pinterest.com/codenamescodegames/"
          >
            <img
              src="http://logovector.net/wp-content/uploads/2014/02/Pinterest-badge-195x195.png"
              height="50"
            />
          </a>
          <img
            src="https://cdn.worldvectorlogo.com/logos/snapchat.svg"
            height="50"
          />
        </div>
      </div>
    )
  }
}
