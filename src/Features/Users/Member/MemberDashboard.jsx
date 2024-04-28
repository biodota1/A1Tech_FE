import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSendLogoutMutation } from "../../Auth/AuthApiSlice";

export default function MemberDashBoard() {
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
      <div className="min-w-[300px] flex flex-col bg-slate-800 text-white">
        <Link to="/dash" className="text-xl m-6 ml-10 text-primary text-center">
          MEMBER
        </Link>
        <Link to="/dash" className="text-xl m-2 text-primary text-center">
          Hi, User
        </Link>
        <Link
          to="products/"
          className="btn bg-slate-800 rounded-none text-xl text-white border-none"
        >
          Products
        </Link>
        <Link
          to="products/"
          className="btn bg-slate-800 rounded-none text-xl text-white border-none"
        >
          History
        </Link>
        <Link
          to="products/"
          className="btn bg-slate-800 rounded-none text-xl text-white border-none"
        >
          Settings
        </Link>
        <Link
          className="btn bg-slate-800 rounded-none text-xl text-white border-none"
          onClick={handleLogout}
        >
          Log out
        </Link>
      </div>
      <main className="w-[80vw] ml-16">
        <Outlet />
      </main>
    </div>
  );
}
