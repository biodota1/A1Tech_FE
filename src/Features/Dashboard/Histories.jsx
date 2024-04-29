import React from "react";
import useAuth from "../../Hooks/UseAuth";
import HistoryListLayout from "../Users/Admin/History/HistoryListLayout";
import { Navigate } from "react-router-dom";

export default function Histories() {
  const { status } = useAuth();
  if (status && status === "Admin") {
    return <HistoryListLayout />;
  } else {
    <Navigate to="/dash" />;
  }
}
