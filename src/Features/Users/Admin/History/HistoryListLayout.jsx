import React from "react";
import HistoryList from "./HistoryList";

export default function HistoryListLayout() {
  return (
    <div>
      <h1 className="mt-5 text-2xl font-bold">History</h1>
      <HistoryList />
    </div>
  );
}
