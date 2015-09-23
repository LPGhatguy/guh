var config = {
	preset: "development",
	modules: [
		{
			name: "core",
			path: __dirname,
			buildPath: "debug",
			productionBuildPath: "release",
			sass: {
				loadPath: []
			},
			server: {

			},
			client: {

			},
			transforms: {
				server: [
					{
						source: "node_modules/@server/**/*",
						dest: ""
					}
				],
				client: [
					{
						source: "node_modules/@client/main.ts",
						dest: "static/bundle.js"
					}
				],
				styles: [
					{
						source: "src/styles/main.scss",
						dest: "static/bundle.css"
					}
				],
				static: [
					{
						source: "src/static/**/*",
						dest: "static"
					}
				]
			}
		}
	]
};

module.exports = config;