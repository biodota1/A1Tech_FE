import React from "react";
import { Navigate } from "react-router-dom";
import UsersList from "./UsersList";
import useAuth from "../../../../Hooks/UseAuth";

const UserListLayout = () => {
  const { status } = useAuth();

  return (
    <div className="">
      <h1 className="mt-5 text-2xl font-bold">Users</h1>
      <UsersList />
    </div>
  );
};

export default UserListLayout;
