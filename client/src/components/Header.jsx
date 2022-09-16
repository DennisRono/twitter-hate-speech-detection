import React, { Fragment } from 'react'
import Twitter from '../assets/images/twitter.png'

const Header = () => {
  return (
    <Fragment>
        <header className="header">
          <div className="header-container">
            <div className="header-brand">
              <div className="twitter-logo">
                <img src={Twitter} alt="" className="twitterLogo" />
              </div>
              <div className="brand-texts">
                <h3>Hate Speech Detection</h3>
              </div>
            </div>
            <div className="navigation">
              
            </div>
          </div>
        </header>
    </Fragment>
  )
}

export default Header