import React from 'react'
import { graphql } from 'gatsby'

import InstagramEmbed from 'react-instagram-embed'
import _ from 'lodash'

import { Signature } from '../elements'
import Layout from '../components/layout'
import PageNavigation from '../components/page-navigation'

const Fin = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const back = _.sortBy(edges, ({ node }) => node.fields.slug)[
    edges.length - 1
  ]

  return (
    <Layout>
      <h1>Before you leave 👇</h1>
      <p>
        You have reached a relaxing part of the day! Who's up for a beer? 🍻
      </p>
      <p>
        Thank you for coming to my workshop! I hope you had a great time and
        feel confident in your ability to bring your ideas to life with React,
        Gatsby, GraphQL, and Serverless. We covered a lot of ground today so
        don't worry if things feel a little shakey.
      </p>
      <p>
        This page is staying up so you can refer back, if you ever need a quick
        mental refresher.
      </p>
      <p>
        <big>
          Please fill out{' '}
          <a href="https://swizecteller.typeform.com/to/ARfTbr">
            this feedback form
          </a>
          . It helps me improve. <br />
          I'll send you something nice in return. :)
        </big>
      </p>
      <p>Enjoy this relaxing video of Kiwi eating a chip</p>
      <InstagramEmbed url="https://www.instagram.com/p/BR9xFYulmiL/" />

      <PageNavigation prevPage={back} />

      <Signature />
    </Layout>
  )
}

export const query = graphql`
  query FinQuery {
    allMarkdownRemark {
      totalCount
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

export default Fin
