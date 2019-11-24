module.exports = {
  siteMetadata: {
    title: `Gatsby Workshop`,
    description: `My Gatsby site`,
    author: `Imran Sayed`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
	  {
		  resolve: "gatsby-source-graphql",
		  options: {
			  // Arbitrary name for the remote schema Query type
			  typeName: "WPGraphQL",
			  // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
			  fieldName: "wpgraphql",
			  // Url to query from
			  url: "https://codeytek.com/blog/graphql",
		  }
	  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
