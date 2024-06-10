
# Task for students

1. Open terminal 
2. Navigate to this project root folder i.e. `day_2/bundling-and-transpilation` folder 
3. Run `npm install`
4. See `node_modules` folder generated with all the dependencies. This will include all the downloaded third-party libraries.
5. See the scripts section in  `package.json` 
6. Now build the project by running `npm run build`
7. Observe the output in `dist/bundle.js`.You will see a non-transpiled and non-minified output.
8. Run `npm run start` which will run the `bundle.js` file.
9. Run `npm run dev` this will run the `index.js` file. 
Note: Steps 7 and 8 are different ways to handle project run in development and production mode.

Now do some experiments:
   1. In the `rollup.config.js` file add/uncomment babel. The plugins section will now contain:
    ```
    plugins: [
        resolve(),
        commonjs(),
        json(),
        babel({ babelHelpers: "bundled", exclude: "node_modules/**" })
        // terser(),
        ]
    ```
   2. Run `npm run build` again
   3. Observer the output in `dist/bundle.js`. You will see a transpiled but non-minified output. Our es6 arrow functions are transpiled to normal functions.
   4. Again, uncomment `terser() ` , Run `npm run build` command. You will see a transpiled and minified (compact) output file.


To learn more about babel [visit here](https://babeljs.io/docs/)