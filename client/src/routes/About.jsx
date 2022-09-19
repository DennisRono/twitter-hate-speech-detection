import React, { Fragment } from 'react'
import '../styles/css/about.css'
import Header from '../components/Header'
import { Helmet } from "react-helmet"
import { ReactComponent as Send } from '../assets/svg/arrow-up-right-from-square.svg'

const About = () => {
  return (
    <Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>About | Twitter Hate Speech Detection</title>
        </Helmet>
        <Header/>
        <div className="about">
            <h1 className="about-title">Twitter hate crime and cyberbullying detection</h1>
            <p className="creator">Created by <a href="https://github.com/zarina">Cynthia Chelang'at <Send className="sendicon"/></a></p>
        </div>
    </Fragment>
  )
}

export default About