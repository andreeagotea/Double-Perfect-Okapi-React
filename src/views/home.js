import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Double Perfect Okapi</title>
        <meta property="og:title" content="Double Perfect Okapi" />
      </Helmet>
      <img
        alt="image"
        src="/deep-beneath-the-antelope-canyon-200h.jpg"
        className="home-image"
      />
    </div>
  )
}

export default Home
