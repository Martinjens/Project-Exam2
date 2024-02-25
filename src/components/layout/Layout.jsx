import React from "react";
import MainNav from "./Nav";
import { Outlet } from "react-router-dom";

function Layout({ isLoggedIn }) {
  return (
    <>
      <MainNav isLoggedIn={isLoggedIn} />
      <Outlet />
    </>
  );
}

export default Layout;
