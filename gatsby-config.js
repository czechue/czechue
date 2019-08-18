module.exports = {
	siteMetadata: {
		title: `Czechue Page`,
		description: `Page description`,
		author: `czechue`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				test: /\.js$/,
				exclude: /(node_modules|.cache|public)/,
				stages: [ 'develop' ],
				options: {
					emitWarning: true,
					failOnError: false
				}
			}
		},
		{
			resolve: `gatsby-plugin-sass`
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets`
			}
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
				icon: `src/assets/gatsby-icon.png` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
