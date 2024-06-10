import resolve from "@rollup/plugin-node-resolve"; // resolve packages
import commonjs from "@rollup/plugin-commonjs"; // bundle to cjs
import babel from "@rollup/plugin-babel"; // transpile js
import json from "@rollup/plugin-json"; // json import
import terser from "@rollup/plugin-terser"; // minify js

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    // babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
    // terser(),
  ],
};
