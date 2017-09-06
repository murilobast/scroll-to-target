const babel = require('rollup-plugin-babel')
const uglify = require('rollup-plugin-uglify')

module.exports = {
	input: 'src/index.js',
	output: {
		file: 'index.js',
		format: 'umd',
		name: 'scrollToTarget'
	},
	plugins: [
		babel({
			exclude: 'node_modules'
		}),
		uglify()
	]
}