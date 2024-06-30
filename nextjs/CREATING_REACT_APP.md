

# Different ways to create React Application 

### Vite app

We can use vite to create a React app.
```bash
npm create vite@latest
```

#### Building for production
  1. Run `npm run build`
  2. Open the index.html file in the `dist` folder 
See more [here](https://vitejs.dev/guide/)

## Using Create React APP to build react website

```bash
npx create-react-app my-app
```
See more at [Official Create React App (CRA) website](https://create-react-app.dev/)


## Using Next JS to build server rendered app
We can use next js to create server side rendered application. i.e the html is generated on the server after the user makes the request.
To create a next js app use command. 
```bash 
npx create-next-app@latest 
```
#### Building for production
1. Run `npm run build`
2. Run `npm start`

## Using Gatsby to create Server Side Generated Static frontends
We can use Gatsby to create static frontends which are rendered at build time.
Here is the guide to setting things up.

### Gatsby setup
1. https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/
2. https://www.gatsbyjs.com/docs/tutorial/getting-started/part-1/

## Using Gatsby starter templates
Gatsby starter templates can be found [here](https://www.gatsbyjs.com/starters/ ). Also you can browse directly on [GitHub](https://github.com/gatsbyjs/)



# Deployment options

We can deploy a Next JS app on [Vercel.](https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app/deploy)

Or we can deploy static frontends on [Netlify](https://www.netlify.com/) 