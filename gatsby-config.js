module.exports = {
  siteMetadata: {
    title: 'React and D3v4 workshop by Swizec',
    description: 'React and D3v4 workshop by Swizec',
    author: 'Swizec Teller',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: { pathToConfigModule: 'src/utils/typography.js' },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // This path is relative to the root of the site.
        icon: 'src/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'src', path: `${__dirname}/src/` },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-code-repls',
            options: {
              externals: [
                'https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min.js',
              ],
              dependencies: ['d3'],
              codesandbox: ['react', 'react-dom', 'd3'],
              html: '<div id="root"></div>',
              directory: `${__dirname}/examples/`,
              target: '_blank',
            },
          },
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    'gatsby-plugin-twitter',
    'gatsby-plugin-nprogress',
  ],
}
