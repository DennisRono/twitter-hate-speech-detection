import React, { Fragment } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from './routes/Home'
import Contact from './routes/Contact'
import NotFound from './routes/NotFound'

const App = () => {
  return (
    <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </Fragment>
  )
}

export default App