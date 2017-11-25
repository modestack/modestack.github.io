module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  appFlags: {
      isSubscriptionBoxEnabled: false
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sass`,
      {
          resolve: `gatsby-plugin-typography`,
          options: {
              pathToConfigModule: `src/utils/typography.js`,
          },
      }
  ]
};
