// /**
//  * Layout component that queries for data
//  * with Gatsby's StaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/static-query/
//  */

// import React from 'react'
// import PropTypes from 'prop-types'
// import { StaticQuery, graphql } from 'gatsby'

// import Header from './header'
// import './layout.css'

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: '0 auto',
//             maxWidth: 960,
//             padding: '0px 1.0875rem 1.45rem',
//             paddingTop: 0,
//           }}
//         >
//           <main>{children}</main>
//           <footer>
//             ©
//             {' '}
//             {new Date().getFullYear()}
// , Built with
//             {' '}
//             <a href="https://www.gatsbyjs.org">Gatsby</a>
//           </footer>
//         </div>
//       </>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout

import React from 'react'
import PropTypes from 'prop-types'
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
          Data visualization with React & D3 2018 -{' '}
          <small>workshop by Swizec</small>
        </Link>
      </h2>
    </div>
  </div>
)

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Data visualization with React & D3v4 - workshop by Swizec"
      meta={[
        {
          name: 'description',
          content: 'Data visualization with React & D3v4',
        },
        {
          name: 'keywords',
          content: 'react, workshop, d3, dataviz, data visualization',
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

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Layout
