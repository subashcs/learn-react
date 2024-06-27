# What is [NEXT JS](https://nextjs.org/) ?

Next.js is a React framework for building full-stack web applications.  
Next.js abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.

Main features of Next.js:
- File base routing system inbuilt
- You can create API endpoints within the Next.js application which allows for server-side logic and integration with databases or other services.
- Built in CSS and SASS support
- Runs on the server side and supports both Client Side Rendering, Server Side Rendering, Static Generation of React Components
- Data fetching with request memoization, data caching and revalidation
- Image, font and scripts optimizations for faster load
- Typescript support

## Installation

- Navigate to the directory `nextjs`
- Run command  `npx create-next-app@latest`, and follow the prompts. This will initialize a new Next JS application.
  Example selected configuration:

```bash
✔ What is your project named? … my-app
✔ Would you like to use TypeScript? … No
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … No  
✔ Would you like to use "src/"" directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … No
```

- You will see a new folder with the given project name. Navigate to this new folder.
- Observe the Project Structure. Verify the following :
  - node_modules 
  - app
  - pages
  - public
  - src
  - package.json with available scripts
  - next.config.js
- See official documentation about [Project Structure](https://nextjs.org/docs/getting-started/project-structure)

- Run `npm run dev` to run in development mode
- See this documentation for understanding route definitions. [Defining Routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)


## Building Your Application

### Adding a new page 
Lets add a page named dashboard 
1. Create a folder named dashboard and inside it create a file named `page.js`. Inside `page.js` create a react component named dashboard. Add default export for the newly created react component. 
2. Now navigate to `http://localhost:3001/dashboard` to see the content of this new page.

For more details view [official documentation](https://nextjs.org/docs/app/building-your-application)
[Data fetching patterns](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns)


## Styling your application 
[Official Documentation](https://nextjs.org/docs/app/building-your-application/styling)