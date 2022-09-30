import React, { Fragment } from 'react'
import Header from '../components/Header'
import { Helmet } from "react-helmet"

const Contact = () => {
  return (
    <Fragment>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Us | Twitter Hate Speech Detection</title>
      </Helmet>
      <Header/>
    </Fragment>
  )
}

export default Contact