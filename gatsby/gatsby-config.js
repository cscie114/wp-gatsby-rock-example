module.exports = {
  siteMetadata: {
    title: `🪨 Rock Movie Extravaganza 🔥`,
    siteUrl: process.env.SITE_URL ||`http://localhost/`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WPGRAPHQL_URL || "http://localhost:8080/graphql",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/data/`,
      }
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'RockMoviesJson',
        imagePath: 'Poster',
      },
    },
  ],
};
