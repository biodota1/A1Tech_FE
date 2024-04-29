import React from "react";
import useAuth from "../../Hooks/UseAuth";
import AdminProductsLayout from "../Users/Admin/AdminProducts/AdminProductsLayout";
import { Navigate } from "react-router-dom";

export default function Products() {
  const { status } = useAuth();
  if (status && status === "Admin") {
    return <AdminProductsLayout />;
  } else {
    <Navigate to="/dash" />;
  }
}
