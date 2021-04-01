/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: "Bulbbot",
	tagline: "We take Discord Moderation to the next level",
	url: "https://bulbbot.mrphilip.xyz",
	baseUrl: "/docs/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "TesterQTs",
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
						"https://github.com/TestersQTs/bulbbot-website-docs/blob/master/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
