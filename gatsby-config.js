module.exports = {
  siteMetadata: {
    title: `autoTRADER.ca`,
    description: `autoTRADER Ford`,
    author: `@autoTRADER`,
    siteUrl: `https://autotrader.ca/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `##e7f0f9`,
        theme_color: `##d7000c`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
