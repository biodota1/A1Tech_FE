import React from "react";

import RecentAddedProducts from "./RecentAddedProducts";
import UsersWidget from "./UsersWidget";
import ProductWidget from "./ProductWidget";
import VisitorWidget from "./VisitorWidget";
import OrderWidget from "./OrderWidget";
import ActiveUsersList from "./ActiveUsersList";
import Order from "./Order";
import OrderList from "./OrderList";

export default function AdminHome() {
  return (
    <div className=" bg-slate-200 text-slate-800">
      <h1 className="mt-5 text-2xl font-bold">Dashboard</h1>
      <div className="flex gap-6 mt-8">
        <div className="grid gap-6">
          <UsersWidget />
          <ProductWidget />
          <VisitorWidget />
          <OrderWidget />
        </div>
        <RecentAddedProducts />
      </div>
      <div className="mt-6 w-[825px] rounded-r-lg">
        <ActiveUsersList />
      </div>
      <div className="mt-6 w-[825px] rounded-r-lg">
        <OrderList />
      </div>
    </div>
  );
}
