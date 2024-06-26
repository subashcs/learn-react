import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./views/Products";
import RootLayout from "./layout/RootLayout";
import Orders from "./views/Orders";
import Dashboard from "./views/Dashboard";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "products/",
        element: <Products />,
      },
      {
        path: "orders/",
        element: <Orders />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
