const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://docs.scope.ink",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://user-images.githubusercontent.com/48650098/71517626-462d8e80-28af-11ea-8754-b11434f1dee3.png",
		"logoLink": "/",
		"title": "Docs Scope",
		"githubUrl": "",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": "" }
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/starting-with-scope", "/integrations", "/scope-metrics", "/company-information", "/billing-and-invoices"

		],
		"links": [
			{ "text": "Contact Us", "link": "https://scope.ink/contact" },
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Docs Scope | Scope",
		"description": "Documentation of Scope.ink.",
		"ogImage": null,
		"docsLocation": "https://docs.scope.ink",
		"favicon": "https://user-images.githubusercontent.com/48650098/71517626-462d8e80-28af-11ea-8754-b11434f1dee3.png"
	},
};

module.exports = config;