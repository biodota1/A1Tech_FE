import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Test() {
  return (
    <div className="min-h-[100vh] flex">
      <aside className="bg-slate-300 w-[250px] flex flex-col">
        <Link to="/dash" className="text-xl m-2 ml-10">
          Dashboard
        </Link>
        <Link to="users/" className="btn btn-primary rounded-none text-xl">
          Users
        </Link>
        <Link to="products/" className="btn btn-primary rounded-none text-xl">
          Products
        </Link>
      </aside>
      <main className="w-auto">
        <Outlet />
      </main>
    </div>
  );
}
