import React from 'react'

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

export default CodesandboxEmbed
