import React, { Fragment } from 'react'
import '../styles/css/header.css'
import {ReactComponent as Twitter} from '../assets/svg/twitter.svg'
import { Link } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'

const Header = () => {
  return (
    <Fragment>
        <header className="header">
          <div className="header-container">
            <div className="header-brand">
              <div className="twitter-logo">
              <Link to="/"><Twitter className="twitterLogo" /></Link>
              </div>
              <div className="brand-texts">
                <Link to="/"><h3>Twitter Hate Speech Detection</h3></Link>
              </div>
            </div>
            <div className="navigation">
              <nav className="nav">
                <ul className="nav-list">
                  <li className="nav-link">
                    <Link className="nav-red" to="/about">About</Link>
                  </li>
                  <li className="nav-link">
                    <Link className="nav-red" to="/contact">Contact</Link>
                  </li>
                  <li className="nav-link">
                    <Link className="nav-red auth-btn-login" to="/auth">Login</Link>
                  </li>
                  <li className="nav-link">
                    <Link className="nav-red auth-btn-register" to="/auth">Register</Link>
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