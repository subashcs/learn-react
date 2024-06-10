# Task
Run this React project initialized with webpack.

## Steps
1. Go to root directory ie. `react-webpack-custom` in your terminal.
2. Install dependencies. Run command `npm install`
3. Run `npm start` command
4. In your browser, open [localhost:300](http://localhost:3000).
5. To understand how things work: 
   1. In your codebase, See `webpack.config.js` , the `public` folder and the `src` folder. 
   2. You will find that the JavaScript is first compiled to `bundle.js` file which in linked to `public/index.html`. 
   3. In the index.html there is a `div` element with #id `react-app` where our React App component is mounted(placed). The mounting is done by React, under the hood, which is included in our `bundle.js`

To learn more about webpack [visit here](https://webpack.js.org)

