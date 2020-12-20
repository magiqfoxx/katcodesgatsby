module.exports = {
  siteMetadata: {
    title: "Katcodes",
    description:
      "A while ago, Kat decided to learn to code. Here's what happened next...",
    url: "https://katcodes.com",
    image: "/favicon.ico",
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
