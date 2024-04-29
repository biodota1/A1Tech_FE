import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import AdminDashboard from "../Users/Admin/AdminDashboard";
import MemberDashBoard from "../Users/Member/MemberDashboard";

export default function Dashboard() {
  const { status } = useAuth();
  if (status && status === "Admin") {
    return <AdminDashboard />;
  } else if (status === "Member") {
    return <MemberDashBoard />;
  } else {
    <Navigate to="/login" />;
  }
}
