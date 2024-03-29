import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Product from "./Product/Product";
import PublicLayout from "./Components/PublicLayout";
import Login from "./Features/Auth/Login";
import Register from "./Features/Auth/Register";
import UserDashboard from "./Features/Users/UserDashboard";
import Prefetch from "./Features/Auth/Prefetch";
import AdminHome from "./Features/Users/Admin/AdminHome";
import UsersList from "./Features/Users/Admin/Users/UsersList";
import ProductsList from "./Features/Users/Admin/Products/ProductsList";
import PersistLogin from "./Features/Auth/PersistLogin";
import Test from "./Test/Text";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        Component: () => <Home />,
      },
      {
        path: "test",
        element: <Test/>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        element: <PersistLogin />,
        children: [
          {
            element: <Prefetch />,
            children: [
              {
                path: "dash",
                element: <UserDashboard />,
                children: [
                  { index: true, Component: () => <AdminHome /> },
                  {
                    path: "users",
                    element: <UsersList />,
                  },
                  {
                    path: "products",
                    element: <ProductsList />,
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        path: "register",
        element: <Register />,
      },
      {
        path: "products/:id",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
    ],
  },
]);

const content = <RouterProvider router={router} />;

function App() {
  return content;
}

export default App;
