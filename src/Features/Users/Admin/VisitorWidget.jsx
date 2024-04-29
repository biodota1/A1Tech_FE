import React from "react";
import icon from "../../../assets/visitor.png";
import { useGetHistoryQuery } from "./History/HistoryApiSlice";

export default function VisitorWidget() {
  const { data: visitors, isSuccess } = useGetHistoryQuery(undefined, {
    pollingInterval: 6000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let noOfVisitors;

  if (isSuccess) {
    const { ids } = visitors;
    noOfVisitors = ids.length;
  }
  return (
    <div className="flex bg-slate-100 h-[120px] w-[400px] rounded-lg p-5">
      <img className="h-full" src={icon} alt="" />
      <div className="pl-6">
        <p className="text-lg font-bold text-green-400">Total Visitors</p>
        <p className="text-2xl text-center font-bold text-slate-800">
          {noOfVisitors}
        </p>
        <p>As of this month</p>
      </div>
    </div>
  );
}
