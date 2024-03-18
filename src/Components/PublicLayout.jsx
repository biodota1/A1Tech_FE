import React from "react";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";
import { Outlet } from "react-router-dom";

const content = (
  <>
    <PublicNavbar />
    <Outlet />
    <PublicFooter />
  </>
);

export default function PublicLayout() {
  return content;
}
