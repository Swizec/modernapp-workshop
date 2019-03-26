import React from 'react'
import Link from 'gatsby-link'

import { Navigation } from '../elements'

const PageNavigation = ({ prevPage, nextPage }) => {
  let prevLink
  let nextLink

  if (prevPage) {
    prevLink = (
      <Link to={prevPage.node.fields.slug}>
        👈 {prevPage.node.frontmatter && prevPage.node.frontmatter.title}
      </Link>
    )
  } else {
    prevLink = <Link to="/">👈 Home</Link>
  }

  if (typeof nextPage === 'undefined') {
    nextLink = null
  } else if (nextPage) {
    nextLink = (
      <Link to={nextPage.node.fields.slug}>
        {nextPage.node.frontmatter.title} 👉
      </Link>
    )
  } else {
    nextLink = <Link to="/fin">🎊 Fin 👉</Link>
  }

  return (
    <Navigation>
      <h2>{prevLink}</h2>
      <h2>{nextLink}</h2>
    </Navigation>
  )
}

export default PageNavigation
