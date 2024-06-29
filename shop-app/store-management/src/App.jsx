import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./views/Products";
import RootLayout from "./layout/RootLayout";
import Orders from "./views/Orders";
import Dashboard from "./views/Dashboard";
import { Product } from "./views/Product";

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
        path: "product/:productId",
        element: <Product />,
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
