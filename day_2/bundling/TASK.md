# Task
You will install all the dependencies and run this project. Also you will modify the rollup config.

## Run the project
1. Navigate to this folder i.e `day_2/bundling` in the terminal of your choice. You can use this command:
   ``` cd day_2/bundling ```
2. Observe the `package.json`, `rollup.config.js` file and `src` directory. The `src` directory contains our main program.
3. The rollup library and plugins we will be using are included in the `devDependencies` section.
5. Run `node index.js`. You will see the output after executing the `index.js` file.
6. Now we will use rollup to bundle and run this instead.  
7. We need rollup and other dependencies which we will install using command `npm install`.
8. Now let's run the build command `npm run build` to generate the `bundle.js` file.
9. Observe the bundle file  in `dist/bundle.js`

## Tweak some rollup config
1. Rename the `index.js` file to `main.js` file.
2. Change the `input` in rollup config to take `src/main.js`.
3. Also, change the `output` file to `build/output.js`
4. Remove the `dist` folder
5. Change the `package.json` main file location to `build/output.js`  
6. In `scripts`  build command, replace  `dist/bundle.js` with `build/output.js`
7. Now, run the build command `npm run build`
8. See this time the output will be generate in different folder

You have now learned how to change the bundler config.

To learn more about rollup [visit here](https://rollupjs.org/introduction/)