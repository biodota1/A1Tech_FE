import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
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
import Dashboard from "./Features/Dashboard/Dashboard";
import DashHome from "./Features/Dashboard/DashHome";
import Users from "./Features/Dashboard/Users";
import Products from "./Features/Dashboard/Products";
import Histories from "./Features/Dashboard/Histories";

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
                element: <Dashboard />,
                children: [
                  { index: true, Component: () => <DashHome /> },
                  { path: "users", element: <Users /> },
                  { path: "products", element: <Products /> },
                  { path: "history", element: <Histories /> },
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
