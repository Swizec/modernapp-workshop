import React from 'react'

import InstagramEmbed from 'react-instagram-embed'
import TweetEmbed from 'react-tweet-embed'
import { ReactTypeformEmbed } from 'react-typeform-embed'

const CodesandboxEmbed = ({ id, highlights = '' }) => {
  return (
    <iframe
      title={`CodesandboxEmbed-id-${id}`}
      src={`https://codesandbox.io/embed/${id}?codemirror=1&highlights=${highlights}`}
      style={{
        width: '100%',
        height: '500px',
        border: '0',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  )
}

const TypeformEmbed = ({ ...props }) => {
  return typeof window !== 'undefined' ? <ReactTypeformEmbed {...props} /> : ''
}

export {
  // docs: this file
  CodesandboxEmbed,
  // docs: https://sugarshin.github.io/react-instagram-embed/
  InstagramEmbed,
  // docs: https://github.com/capaj/react-tweet-embed
  TweetEmbed,
  // docs: https://alexgarces.github.io/react-typeform-embed/
  TypeformEmbed,
}
