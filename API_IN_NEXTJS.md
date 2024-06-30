[See official documentation](https://nextjs.org/learn-pages-router/basics/api-routes/setup) or follow the given steps.

## Steps
1. Begin with an initial template. Run the following command.
```
npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/main/basics/api-routes-starter"
```
2. Analyze the project organization and required packages in package.json.
3. There are different ways to run code in server for data fetching in Next js. [See more here](https://nextjs.org/docs/pages/building-your-application/data-fetching)
   1. You can use the `getStaticProps` function, in your page file.
   2. You can also create a custom API endpoint. And call it from your component.
4. Our task is to create an API endpoint inside a Next.js app. Here's a sample api file `pages/api/hello.js`
```javascript
    // req = HTTP incoming message, res = HTTP server response
    export default function handler(req, res) {
      res.status(200).json({ text: 'Hello' });
    }

```
4. Try accessing it at http://localhost:3000/api/hello. You should see {"text":"Hello"}.
***Disclaimer!: Do Not Fetch an API Route from getStaticProps or getStaticPaths***


You will see an old structure of the project. 

Here's a guide on [migrating to a new project structure](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration). This is not required for now.