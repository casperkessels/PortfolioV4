const path = require(`path`)

module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: `Portfolio Casper Kessels`,
    author: {
      name: `Casper Kessels`,
    },
    description: `The professional portfolio of Casper Kessels`,
    siteUrl: `https://casperkessels.com/`,
    social: {
      twitter: `@casperkessels`,
    },
  },
  plugins: [
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1360,
              withWebp: true,
              showCaptions: true,
              quality: 75,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio Casper Kessels`,
        short_name: `Portfolio`,
        start_url: `/`,
        display: `standalone`,
        icon: `content/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
    resolve: 'gatsby-plugin-simple-analytics',
    options: {
     // Optional custom domain
     domain: 'sa.casperkessels.com'
      },
    },
    {
      resolve: '@mkitio/gatsby-theme-password-protect',
      options: {
        partialMatching: true,
        pagePaths: ['/Aircall'],
        password: 'AH0jwRAF9t', // delete or `undefined` to disable password protection
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-background-image`,
    `gatsby-plugin-simple-analytics`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      },
    },
  ],
}