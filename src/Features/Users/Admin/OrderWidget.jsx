import React from "react";
import icon from "../../../assets/order.png";
import { useGetHistoryQuery } from "./History/HistoryApiSlice";

export default function OrderWidget() {
  const { data: orders, isSuccess } = useGetHistoryQuery(undefined, {
    pollingInterval: 6000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let noOfOrders;

  if (isSuccess) {
    const { ids } = orders;
    noOfOrders = ids.length;
  }
  return (
    <div className="flex bg-slate-100 h-[120px] w-[400px] rounded-lg p-5">
      <img className="h-full" src={icon} alt="" />
      <div className="pl-6">
        <p className="text-lg font-bold text-green-400">Total Orders</p>
        <p className="text-2xl text-center font-bold text-slate-800">
          {noOfOrders * 7}
        </p>
        <p>As of this month</p>
      </div>
    </div>
  );
}
