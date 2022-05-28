import React from "react";
import { Link } from "react-router-dom";
import { IoMdWallet } from "react-icons/io";

function SideBarPage() {
  return (
    <div className=" bg-indigo-500 flex   ">
      <div className="flex  ml-4  ">
        <h1 className="text-white font-extrabold text-4xl text-center items-center pt-6 mb-2">
          InternShip
        </h1>
        <div className=" ml-8 flex text-center space-x-8">
          <Link
            to="/Basic"
            className="text-white font-medium text-lg flex items-center hover:bg-blue-700 hover:rounded-md hover:py-1 "
          >
            Basic
          </Link>

          <Link
            to="/Creative"
            className="text-white font-medium text-lg flex items-center hover:bg-blue-700 hover:rounded-md hover:py-1 "
          >
            Creative
          </Link>

          <Link
            to="/Professional"
            className="text-white font-medium text-lg flex items-center hover:bg-blue-700 hover:rounded-md hover:py-1 "
          >
            Professional
          </Link>
        </div>

        <div className="ml-96 flex text-center space-x-8">
          <Link
            to="/With-photo"
            className="text-white font-medium text-lg flex items-center hover:bg-blue-700 hover:rounded-md hover:py-1 "
          >
            {" "}
            <IoMdWallet />
            <span className="mr-2"></span>
            All
          </Link>
          <Link
            to="/Without-Photo"
            className="text-white font-medium text-lg flex items-center hover:bg-blue-700 hover:rounded-md hover:py-1"
          >
            {" "}
            <IoMdWallet />
            <span className="mr-2"></span>
            Without Photo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBarPage;
