import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";

export default function UserDashboard() {
  const { status } = useAuth();
  if (status && status === "Admin") {
    <Navigate to="admin" />;
  } else if (status === "Member") {
    <Navigate to="member" />;
  } else {
    <Navigate to="/login" />;
  }
  return <Outlet />;
}
