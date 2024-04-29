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
    <div className="min-h-[100vh] flex bg-slate-200">
      <div className="bg-slate-800 min-w-[250px] flex flex-col text-green-400">
        <Link
          to="/dash"
          className="text-xl font-bold h-[100px] w-full pt-8 pl-16"
        >
          ADMIN
        </Link>
        <Link
          to="/dash"
          className="btn bg-slate-800 rounded-none  text-white border-none"
        >
          <p className="text-xl w-full text-justify pl-[50px]"> Dashboard</p>
        </Link>
        <Link
          to="users/"
          className="btn bg-slate-800 rounded-none  text-white border-none"
        >
          <p className="text-xl w-full text-justify pl-[50px]"> Users</p>
        </Link>
        <Link
          to="products/"
          className="btn bg-slate-800 rounded-none text-white border-none"
        >
          <p className="text-xl w-full text-justify pl-[50px]"> Products</p>
        </Link>
        <Link
          to="history/"
          className="btn bg-slate-800 rounded-none text-white border-none"
        >
          <p className="text-xl w-full text-justify pl-[50px]"> History</p>
        </Link>
        <Link
          to="settings/"
          className="btn bg-slate-800 rounded-none text-white border-none"
        >
          <p className="text-xl w-full text-justify pl-[50px]"> Settings</p>
        </Link>
        <button
          className="btn bg-slate-800 rounded-none text-white border-none"
          onClick={handleLogout}
        >
          <p className="text-xl w-full text-justify pl-[50px]"> Logout</p>
        </button>
      </div>
      <main className="w-[80vw] ml-16">
        <Outlet />
      </main>
    </div>
  );
}
