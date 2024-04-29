import React from "react";
import useAuth from "../../Hooks/UseAuth";
import AdminHome from "../Users/Admin/AdminHome";
import { Navigate } from "react-router-dom";

export default function DashHome() {
  const { status } = useAuth();
  if (status && status === "Admin") {
    return <AdminHome />;
  } else {
    <Navigate to="/dash" />;
  }
}
