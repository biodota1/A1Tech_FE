import React from "react";
import { Navigate } from "react-router-dom";
import UsersList from "./UsersList";
import useAuth from "../../../../Hooks/UseAuth";

export default function UserListLayout() {
  const { status } = useAuth();

  return (
    <div>
      {status && status === "Admin" ? <UsersList /> : <Navigate to="/dash" />}
    </div>
  );
}
