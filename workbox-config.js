module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,css,ico,png,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};