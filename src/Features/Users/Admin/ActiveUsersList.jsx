import React from "react";
import { useGetHistoryQuery } from "./History/HistoryApiSlice";
import ActiveUsers from "./ActiveUsers";

export default function ActiveUsersList() {
  const {
    data: history,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetHistoryQuery("historyList", {
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
    const { ids } = history;

    const tableContent = ids?.length
      ? ids.map((historyId) => (
          <ActiveUsers key={historyId} historyId={historyId} />
        ))
      : null;

    content = (
      <div className="bg-slate-100 h-[560px] w-full rounded-lg p-4 pb-10">
        <h2 className="text-black font-bold text-xl">Active Users</h2>
        <div className="h-full overflow-y-scroll px-5">
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
