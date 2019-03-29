import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import _ from 'lodash'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Swizec from '../images/swizec.jpg'
import AppScreenshot from '../images/appscreenshot.png'
import RockOn from '../images/rock-on.gif'

import { BlankUl, SignoffImg, Signature } from '../elements'
import { InstagramEmbed } from '../components/embeds'

const Welcome = () => (
  <div>
    <a href="https://swizec.com">
      <img
        src={Swizec}
        title="Swizec at Write the Docs Prague in 2014"
        alt="Swizec at Write the Docs Prague in 2014"
      />
    </a>
    <h1>Hello friend 👋</h1>
    <p>Welcome to Swizec's Build and launch a Modern WebApp workshop.</p>
    <p>
      Today you're going to learn a bunch of stuff. Some of it in detail, some
      of it just enough to get stuff working. Our goal is to build an app
      together and leave with enough knowledge to bring your ideas to life from
      scratch.
    </p>
    <h2>The pitch ⁉️</h2>
    <p>
      The web has never been so productive. You can build and launch a whole
      new app in just a few hours. It’s crazy! You can build what huge teams
      with large budgets could only dream of a few years ago.
    </p>
    <ul>
      <li>Beautiful UI? Got that. </li>
      <li>Great SEO? Yep. Easy.</li>
      <li>Amazing lighthouse speed scores? You got it.</li>
      <li>Running heavy code on the backend? Done. </li>
      <li>Saving user data? Yepp. </li>
      <li>Works on</li>
      mobile? Of course.
      <li>What about an offline PWA? D’oh. </li>
      <li>Makes money? Yep got that too.</li>
    </ul>
    <p>
      Maybe it’s not your job to do all that in your company right now. The
      bigger the company, the smaller your area of expertise. But wouldn’t it
      be awesome, if you could do all of that?
    </p>
    <p>
      What if next time you have an idea for a great feature, you just build
      it? Own the whole stack from start to finish. You’d be a superhero!
    </p>
    <p>
      Or maybe it’s just for you. Great idea for a project, an app, a painful
      problem you want to solve? Now you can.
    </p>
    <h2>Stuff you should know</h2>
    <p>
      To get the most out of today's workshop, you should be familiar with 👇
    </p>
    <ul>
      <li>React</li>
      <li>stateful/declarative rendering</li>
      <li>JSX</li>
      <li>modern ES6+ syntax</li>
      <li>component lifecycles</li>
      <li>some familiary with styled-components</li>
    </ul>
    <p>
      <strong>But fear not!</strong>
    </p>
    <p>I am here to guide you. We'll go through everything together. :)</p>
    <p>Here's what we're gonna build</p>
    <a href="https://shared-grocery-list.swizec.now.sh">
      <img
        src={AppScreenshot}
        title="shared grocery list app"
        alt="shared grocery list app"
      />
    </a>
  </div>
)

const Goals = () => (
  <div>
    <h1>Our goal today</h1>
    <p>Think of this as our setlist 🤘</p>
    <BlankUl>
      <li>🕵️‍♀️ how to set up a static webapp with Gatsby</li>
      <li>❓ why that's important for SEO and speed scores</li>
      <li>🎨 how to build good looking UIs without design skills</li>
      <li>🎓 how to move some functionality to the backend with serverless</li>
      <li>📚 how to use serverless to store data</li>
      <li>🔧 using GraphQL to query your data</li>
      <li>🎣 React Hooks</li>
    </BlankUl>
    <p>
      You’ll leave this full-day workshop knowing some of the most powerful
      (and fun!) technologies that make web development in 2019 so amazing.
    </p>
  </div>
)

const ProjectLink = ({ url, children }) => (
  <li>
    <a href={url}>{children}</a>
  </li>
)
ProjectLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const WhoSwiz = () => (
  <div>
    <h2>Swizec Teller</h2>
    <InstagramEmbed
      url="https://www.instagram.com/p/Bd_SGSzlBrb/"
      maxWidth={480}
      hideCaption
    />
    <p>
      Hi, I’m Swizec Teller, a geek with a hat. I help programmers become
      software engineers.
    </p>
    <p>
      You can find out stuff about me, if you ask Google. But generally
      speaking I have:
    </p>
    <ul>
      <li>been coding for over 20 years</li>
      <li>
        <a href="https://swizec.com">writing a blog</a> for 12 years
        <br />
        (please don't read early entries, I was in high school lol)
      </li>
      <li>
        published{' '}
        <a href="http://nightowlsbook.com/">Why Programmers Work at Night</a>,
        that was fun
      </li>
      <li>
        published{' '}
        <a href="https://www.packtpub.com/web-development/data-visualization-d3js">
          Data Visualization with D3.js
        </a>
        , dare ask me about publishers
      </li>
      <li>
        published 3 editions of{' '}
        <a href="https://www.swizec.com/reactd3js/">React + D3</a>, that's been
        great
      </li>
      <li>
        created <a href="https://reactfordataviz.com">ReactForDataViz.com</a>{' '}
        course
      </li>
      <li>
        made this{' '}
        <a href="https://es2017.io">
          interactive ES6+ cheatsheet &mdash; es2017.io
        </a>
      </li>
    </ul>
  </div>
)

const Start = () => (
  <div>
    <h1>Let's get down to business</h1>
    <p>
      This is an interactive workshop. If you have a question, <b>ask</b>. If
      something doesn't make sense, <b>ask</b>. If something is confusing,{' '}
      <b>ask</b>. If I'm not making sense, <b>ask</b>. If your code doesn't
      work, <b>ask</b>.
    </p>
    <p>
      You will write code today. Some code will live on your computer, some in
      the browser.
    </p>
    <p>We will take breaks.</p>
    <p>
      <img src="http://i.imgur.com/04VI9lT.gif" alt="" />
    </p>
    <h2>But first ask yourself this: Why are you here?</h2>
    <p>
      Answering that question will help you get the most out of today. You can
      call your answer out to the group, or just think about it.
    </p>
    <iframe
      title="Why are you here form"
      src="https://swizecteller.typeform.com/to/oQgbmd"
      style={{ width: '100%', height: 500, border: 0 }}
    />
    <p>
      Code you'll write today works with <b>React 16</b> and uses modern{' '}
      <b>ES6+</b>. We'll assume a development environment created with{' '}
      <code>create-react-app</code>. This gives us some special powers. I will
      point them out.
    </p>
  </div>
)

const MDLink = ({ node }) => (
  <div key={node.id}>
    <h2>
      <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
    </h2>
    <div dangerouslySetInnerHTML={{ __html: node.tableOfContents }} />
  </div>
)
MDLink.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
    frontmatter: PropTypes.shape({ title: PropTypes.string.isRequired })
      .isRequired,
    tableOfContents: PropTypes.string.isRequired,
  }).isRequired,
}

const ListContentPages = ({ data }) => {
  const pages = data.allMarkdownRemark.edges

  return (
    <div>
      <h1>Setlist</h1>

      {_.sortBy(pages, ({ node }) => node.fields.slug).map(MDLink)}

      <h2>
        <Link to="/fin">🎊 Fin</Link>
      </h2>
    </div>
  )
}
const queryDataPropTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({ edges: PropTypes.array.isRequired })
      .isRequired,
  }).isRequired,
}
ListContentPages.propTypes = queryDataPropTypes

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

    <Welcome />
    <Goals />
    <WhoSwiz />

    <Start />

    <p>Here's our setlist for today 👇</p>

    <ListContentPages data={data} />

    <a href="https://www.youtube.com/watch?v=QxIWDmmqZzY">
      <SignoffImg src={RockOn} title="Rock On 🤘" />
    </a>

    <h2>Before you head out</h2>
    <p>
      <big>
        Please take a moment to answer a couple questions. Helps me improve,
        makes you feel good.
      </big>
    </p>
    <iframe
      title="Why are you here form"
      src="https://swizecteller.typeform.com/to/ARfTbr"
      style={{ width: '100%', height: 500, border: 0 }}
    />

    <Signature />
  </Layout>
)
IndexPage.propTypes = queryDataPropTypes

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          timeToRead
          tableOfContents
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

export default IndexPage
