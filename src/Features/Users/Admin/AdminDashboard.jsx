import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSendLogoutMutation } from "../../Auth/AuthApiSlice";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

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
    <div className="min-h-[100vh] flex">
      <div className="bg-slate-300 min-w-[300px] flex flex-col">
        <Link to="/dash" className="text-xl m-6 ml-10">
          ADMIN
        </Link>
        <div className="h-15">s</div>
        <Link to="users/" className="btn btn-primary rounded-none text-xl">
          Users
        </Link>
        <Link to="products/" className="btn btn-primary rounded-none text-xl">
          Products
        </Link>
        <Link to="products/" className="btn btn-primary rounded-none text-xl">
          Logs
        </Link>
        <Link to="products/" className="btn btn-primary rounded-none text-xl">
          Settings
        </Link>
        <button
          className="btn btn-primary rounded-none text-xl"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
      <main className="w-[80vw] ml-16">
        <Outlet />
      </main>
    </div>
  );
}
