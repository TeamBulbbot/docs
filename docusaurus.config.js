/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: "Bulbbot",
	tagline: "We take Discord Moderation to the next level",
	url: "https://bulbbot.rocks",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "TeamBulbbot",
	projectName: "bulbbot",
	titleDelimiter: "-",
	themeConfig: {
		colorMode: {
			defaultMode: "dark",
		},
		navbar: {
			title: "Documentation",
			logo: {
				alt: "Logo",
				src: "img/logo.svg",
			},
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					routeBasePath: "/",
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl:
						"https://github.com/TeamBulbbot/docs/blob/master/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
