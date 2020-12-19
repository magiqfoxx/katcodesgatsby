module.exports = {
  siteMetadata: {
    siteUrl: `https://katcodes.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-139946417-1", // Google Analytics / GA
        ],
      },
    },
  ],
}
