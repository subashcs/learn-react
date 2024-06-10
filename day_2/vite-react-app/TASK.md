# Task
## Understand project
This is a project configured with vite. We will understand the different parts of it.
1. Vite Config -> vite.config.js
   The Vite Config is used to configure our project to support various features like supporting `svg images` import. Supporting different styling libraries like `SASS`, `Bootstrap`  and so on.
2. .gitignore 
    Defines what should be ignore while pushing content to remote git repository.
3. index.html
   This is a single page application i.e it has a single html file i.e `index.html`. Contents will be served through this file. Elements are added and removed in this file using React JS in the browser.

   Remember, React is known for creating single page interactive applications.
4. .eslintrc.cjs
   Configurations for linting our code. This project uses `eslint` which automatically detects error in your code during development. [See more](https://eslint.org/)
5. public
   The static contents will be served from `public` folder. Website metadata, SEO config can also reside here.
6. src 
   The `src` folder contains the React App. 
   1. assets
   Inside `src`, the `assets` folder is used to include `images` and other static assets that requires some processing. For example: images included here can be optimized by vite plugins for faster load.
   2. App.js
   Main component for our app that is mounted to this element `<div id="root"></div>` in `index.html` 
   3. index.css 
   Used to style our react component elements.

## Run the project
1. Install dependencies with `npm install` command
2. Run `npm run dev` command to run the app in development mode. The development mode offers Fast Refresh feature and debug logs.
3. Open the link of the development server shown in the terminal. 
4. You'll see the web application home page.

https://vitejs.dev/guide/ 