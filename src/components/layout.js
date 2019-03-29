import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'prismjs/themes/prism-okaidia.css'
import './layout.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            textShadow: 'none',
          }}
        >
          Build and launch a Modern WebApp - <small>workshop by Swizec</small>
        </Link>
      </h2>
      <p style={{ color: 'white', marginBottom: 0 }}> modernwebapp.dev </p>
    </div>
  </div>
)

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Build and launch a Modern WebApp - workshop by Swizec"
      meta={[
        {
          name: 'description',
          content:
            'The web has never been so productive. You can build and launch a whole new app in just a few hours. It’s crazy! You can build what huge teams with large budgets could only dream of a few years ago.',
        },
        {
          name: 'keywords',
          content: 'react, workshop, graphql, serverless',
        },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </div>
)

export default Layout
