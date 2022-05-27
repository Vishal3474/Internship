import React from "react";
import { Link } from "react-router-dom";
import {IoMdWallet,} from "react-icons/io";


function SideBarPage() {
  return (
    <div className="pr-2 bg-indigo-500 w-64 flex flex-col h-screen justify-between ">
      <div className="flex flex-col ml-4 mt-4 ">
        <h1 className="text-white font-extrabold text-4xl pt-6 mb-5">
          InternShip
        </h1>

        <Link
          to="/With-photo"
          className="text-white font-medium text-lg flex items-center hover:bg-gray-700 hover:rounded-md hover:py-2 mb-3"
        >
          {" "}
          <IoMdWallet />
          <span className="mr-2"></span>
         With Photo
        </Link>
        <Link
          to="/Without-Photo"
          className="text-white font-medium text-lg flex items-center hover:bg-gray-700 hover:rounded-md hover:py-2 mb-3"
        >
          {" "}
          <IoMdWallet />
          <span className="mr-2"></span>
          Without Photo
        </Link>
        
      </div>
     
    </div>
  );
}

export default SideBarPage;
