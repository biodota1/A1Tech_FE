import React from "react";
import { useGetProductsQuery } from "./AdminProducts/ProductApiSlice";
import icon from "../../../assets/shopping.png";

export default function ProductWidget() {
  const { data: products, isSuccess } = useGetProductsQuery(undefined, {
    pollingInterval: 6000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let numOfProducts;

  if (isSuccess) {
    const { ids } = products;
    numOfProducts = ids.length;
  }
  return (
    <div className="flex bg-slate-100 h-[120px] w-[400px] rounded-lg p-5">
      <img className="h-full" src={icon} alt="" />
      <div className="pl-6">
        <p className="text-lg font-bold text-green-400">Total Products</p>
        <p className="text-2xl text-center font-bold text-slate-800">
          {numOfProducts}
        </p>
        <p>As of this month</p>
      </div>
    </div>
  );
}
