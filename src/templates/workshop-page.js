import React from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'

import './workshop-page.css'

import { Hero } from '../elements'
import Layout from '../components/layout'
import PageNavigation from '../components/page-navigation'

export default ({ data }) => {
  const page = data.markdownRemark
  const allPages = _.sortBy(
    data.allMarkdownRemark.edges,
    ({ node }) => node.fields.slug
  )

  const currentIndex = allPages.findIndex(
    ({
      node: {
        fields: { slug },
      },
    }) => slug === page.fields.slug
  )
  const nextPage = allPages[currentIndex + 1]
  const prevPage = allPages[currentIndex - 1]

  return (
    <Layout>
      <Hero>{page.frontmatter.title}</Hero>

      <p>
        You can read this segment in in {page.timeToRead} minutes. Solving the
        exercises might take longer.
      </p>
      <p>This segment covers 👇</p>
      <div dangerouslySetInnerHTML={{ __html: page.tableOfContents }} />
      <div
        dangerouslySetInnerHTML={{
          __html: page.html,
        }}
        className="workshop-page"
      />
      <PageNavigation prevPage={prevPage} nextPage={nextPage || null} />
    </Layout>
  )
}

export const query = graphql`
  query WorkshopPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      tableOfContents
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
