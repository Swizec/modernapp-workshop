import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        swizecTeachingImage: file(
          relativePath: { eq: "swizec-teaching.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.swizecTeachingImage.childImageSharp.fluid}
        alt="Swizec teaching at Reactathon 2019"
        title="Swizec teaching at at Reactathon 2019"
      />
    )}
  />
)
