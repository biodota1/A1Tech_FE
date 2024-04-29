import React from "react";
import useAuth from "../../Hooks/UseAuth";
import { Navigate } from "react-router-dom";
import UserListLayout from "../Users/Admin/Users/UserListLayout";

export default function Users() {
  const { status } = useAuth();
  if (status && status === "Admin") {
    return <UserListLayout />;
  } else {
    <Navigate to="/dash" />;
  }
}
