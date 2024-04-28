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
import ProductsList from "./Features/Users/Admin/AdminProducts/ProductsList";
import PersistLogin from "./Features/Auth/PersistLogin";
import AdminProductsLayout from "./Features/Users/Admin/AdminProducts/AdminProductsLayout";
import AdminDashboard from "./Features/Users/Admin/AdminDashboard";
import MemberDashBoard from "./Features/Users/Member/MemberDashboard";
import UserListLayout from "./Features/Users/Admin/Users/UserListLayout";
import MemberHome from "./Features/Users/Member/MemberHome";
import MemberProductsLayout from "./Features/Users/Member/MemberProducts/MemberProductsLayout";

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
                  {
                    path: "admin",
                    element: <AdminDashboard />,
                    children: [
                      { index: true, Component: () => <AdminHome /> },
                      { path: "users", element: <UserListLayout /> },
                      {
                        path: "products",
                        element: <AdminProductsLayout />,
                        children: [
                          { index: true, Component: () => <ProductsList /> },
                        ],
                      },
                    ],
                  },
                  {
                    path: "member",
                    element: <MemberDashBoard />,
                    children: [
                      { index: true, Component: () => <MemberHome /> },
                      { path: "products", element: <MemberProductsLayout /> },
                    ],
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
