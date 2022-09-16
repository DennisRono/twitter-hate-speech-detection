import React, { Fragment } from 'react'
import '../styles/css/header.css'
import {ReactComponent as Twitter} from '../assets/svg/twitter.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Fragment>
        <header className="header">
          <div className="header-container">
            <div className="header-brand">
              <div className="twitter-logo">
                <Twitter className="twitterLogo" />
              </div>
              <div className="brand-texts">
                <h3>Twitter Hate Speech Detection</h3>
              </div>
            </div>
            <div className="navigation">
              <nav className="nav">
                <ul className="nav-list">
                  <li className="nav-link">
                    <Link className="nav-red" to="">About</Link>
                  </li>
                  <li className="nav-link">
                    <Link className="nav-red" to="">Documentation</Link>
                  </li>
                  <li className="nav-link">
                    <Link className="nav-red" to="">History</Link>
                  </li>
                  <li className="nav-link">
                    <Link className="nav-red" to="">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
    </Fragment>
  )
}

export default Header