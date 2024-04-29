import React from "react";
import { useGetProductsQuery } from "./AdminProducts/ProductApiSlice";
import RecentProducts from "./RecentProducts";

export default function RecentAddedProducts() {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery("productsList", {
    pollingInterval: 6000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p>{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = products;

    const tableContent = ids?.length
      ? ids.map((productId) => (
          <RecentProducts key={productId} productId={productId} />
        ))
      : null;

    content = (
      <div className="bg-slate-100 h-[560px] w-[400px] rounded-lg p-4">
        <h2 className="font-bold">Recent Added Products</h2>
        <div className="overflow-scroll-x">
          <table className="table">
            {/* head */}
            <thead></thead>
            <tbody>{tableContent}</tbody>
            {/* foot */}
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    );
  }
  return content;
}
