const resolve = require('@rollup/plugin-node-resolve');

module.exports = {
    input: './index.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: './bundle.js'
    },
    plugins: [
        resolve(),
    ],
};
