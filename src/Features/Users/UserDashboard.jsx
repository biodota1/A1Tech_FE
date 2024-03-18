import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSendLogoutMutation } from "../Auth/AuthApiSlice";
import useAuth from "../../Hooks/UseAuth";
import AdminDashboard from "./Admin/AdminDashboard";
import MemberDashboard from "./Member/MemberDashboard";

export default function UserDashboard() {
  const navigate = useNavigate();

  const { status } = useAuth();

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess);
  }, [isSuccess]);

  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/login");
    sendLogout();
  };

  if (isLoading) return <p>Logging Out...</p>;

  if (isError) return <p>Error: {error.data?.message}</p>;
  return (
    <div>
      {status && status === "Admin" ? (
        <AdminDashboard />
      ) : "UnAuthorized" && status === "Member" ? (
        <MemberDashboard />
      ) : (
        "UnAuthorized"
      )}
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
