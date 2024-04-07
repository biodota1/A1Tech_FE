import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="min-h-[100vh] flex">
      <div className="bg-slate-300 min-w-[300px] flex flex-col">
        <Link to="/dash" className="text-xl m-6 ml-10">
          Dashboard
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
      </div>
      <main className="w-[80vw] ml-16">
        <Outlet />
      </main>
    </div>
  );
}
