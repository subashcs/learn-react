# Set Up the Project

1. Create a new Vite project: Open your terminal and run the following command to create a new project with a React template.

```bash
npm create vite@latest store-management -- --template react
cd store-management
```

1. Install Dependencies: Run  `npm install`
2. Install react-bootstrap, Bootstrap, and Sass.

```bash
npm install react-bootstrap bootstrap
npm install sass
```

1. Import Bootstrap CSS: Modify the src/main.jsx to include Bootstrap's CSS.

```javascript
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.scss'; // Change to .scss for Sass support
    import App from './App';

    import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
```

## Set Up Sass

1. Create a main Sass file:

Create a Sass file: Create an index.scss in the src directory.

```scss
// src/index.scss
@import 'bootstrap/scss/bootstrap'; // Import Bootstrap Sass for customization

body {
  padding-top: 20px;
  background-color: #f8f9fa; // A light background color
}
```

**Now you can import and use react-bootstrap component in your project like following.**

```javascript
import { Table, Button } from 'react-bootstrap';
```

# Day 13

## Setting up React Router
- Set up React router
  `npm install react-router-dom` 
  This will install the latest react router version.
- Setup Router in your root component `App.jsx` in our case. View `./store-management/src/App.jsx` in our case.