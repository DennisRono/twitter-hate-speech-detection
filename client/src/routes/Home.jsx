import React, { Fragment } from 'react'
import Header from '../components/Header'
import { Helmet } from "react-helmet"
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Home | Twitter Hate Speech Detection</title>
        </Helmet>
        <Header/>
        <Footer/>
    </Fragment>
  )
}

export default Home