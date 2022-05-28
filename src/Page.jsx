import React from "react";

function Page(props) {
  return (
    <div className="p-4 m-5 bg-gray-300 border-2 border-gray-200 rounded-md shadow-md ">
      <div className="space-x-2 font-semibold text-md ">
        <span>{props.assignmentTitle}</span>
      </div>

      <div className="flex justify-between pt-4">
        <span className="text-lg font-semibold text-green-600">
          {props.jobDescription}
        </span>

        <span className="text-lg font-semibold text-blue-600">
          {props.email}
        </span>
      </div>
      <img
        className="w-24 h-24 object-cover rounded-full mx-auto "
        src={props.photo}
      ></img>
    </div>
  );
}

export default Page;
