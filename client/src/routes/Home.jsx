import React, { Fragment } from 'react'
import Header from '../components/Header'
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Home | Twitter Hate Speech Detection</title>
        </Helmet>
        <Header/>
    </Fragment>
  )
}

export default Home