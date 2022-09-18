import React, { Fragment } from 'react'
import '../styles/css/landing.css'

const Landing = () => {
  return (
    <Fragment>
        <div className="landing">
            <h2 className="landingtitle">Is Your Tweet Considered Hate Speech?</h2>
            <p className="landingtexts">Please note that this prediction is based on how the model was trained, so it may not be an <br /> accurate representation.</p>
            <form method="post"  className="landingform">
                <div className="form-group">
                    <label htmlFor="tweet">Enter tweet</label><br />
                    <input type="text" className="landingtweetinput" />
                </div>
                <input type="submit" className="lsubmitBtn" value="Tweet"/>
            </form>
        </div>
    </Fragment>
  )
}

export default Landing