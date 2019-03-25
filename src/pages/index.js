import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Swizec from '../images/swizec.jpg'
import DashboardViz from '../images/dog-dashboard-scatterplots.mp4'

import { Video } from '../elements'

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

    <p>Welcome to Swizec's Data visualization with React & D3 workshop.</p>

    <p>
      This is often a 2 day workshop that starts with the basics of React and
      ends with beautiful visualizations. Today we're focusing on the
      visualization part. The exercises we work on together build towards a
      final visualization.
    </p>
    <p>
      These materials are going to stay online forever. I make tweaks when I do
      new workshops so check back any time.
    </p>
    <p>
      To get the most out of today's workshop, you should be familiar with 👇
    </p>
    <ul>
      <li>React</li>
      <li>ideas behind componentization</li>
      <li>stateful/declarative rendering</li>
      <li>JSX</li>
      <li>modern ES6+ syntax</li>
      <li>component lifecycles</li>
    </ul>
    <p>
      <strong>But fear not!</strong>
    </p>
    <p>I am here to guide you. We'll go through everything together.</p>
    {/* <p>
            Today we're going to build your first webapp with React and Friends.
            We're going to use React to build components, React Router for
            routing, styled components for styling, and Redux for state
            management.
        </p>
        <p>
            {`<Tomorrow>`} we're going to learn the basics of D3v4, look at
            several strategies for integration with React, then build a gorgeous
            visualization or two.
        </p>
        <p>
            Your 1st day starts at the very beginning:{" "}
            <em>
                Why React? What problem does it solve? What makes it tick?
                What's the ecosystem like? Why are components the future?
            </em>
        </p>
        <p>
            But fear not, we won't get stuck on the basics. By the end of your
            first, you'll have built a full webapp and understand how it works.
        </p>
        <p>An infinite series of fun gifs like this 👇</p>
        <p>
            <Video src={MortyMindblowers} autoPlay loop />
        </p>
        <p>
            Your 2nd day starts with the idea that you magically remember
            everything and are now a pro. Don't worry if you're not, Swizec is
            here to help and he's going to code everything with you. If you get
            lost, sit back and observe. Checkout the example repo at key points
            so you can catch up.
        </p> */}

    <p>
      Exercises build towards this dashboard showing the connection between dog
      breed size, popularity, and intelligence. It's a set of scatterplots that
      work together.
    </p>

    <p>
      In the 4 hour format final assembly will remain as homework for you, but
      you'll have built all the necessary components. You can see it live,{' '}
      <a href="https://build-qoyobtahea.now.sh/">here</a>
    </p>

    <p>
      <Video src={DashboardViz} autoPlay loop muted />
    </p>
    <p>
      We're gonna keep it simple. React, D3, and Chroma. No Redux or 3rd party
      visualization libraries. Our goal is to really understand how things
      work, not to talk about a thousand libraries you'll forget by tomorrow.
    </p>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

    <Welcome />
  </Layout>
)

export default IndexPage
