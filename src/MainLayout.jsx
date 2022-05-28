import React from "react";
import SideBarPage from "./SideBarPage";
import { Outlet } from "react-router-dom";

function MainLayout(props) {
  return (
    <div className=" ">
      <SideBarPage />
      <div className="p-6 bg-pink-200 ">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
