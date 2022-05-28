import React from "react";

function CreativePage({ c }) {
  return (
    <div className="p-4 m-5 bg-gray-300 border-2 border-gray-200 rounded-md shadow-md ">
      <div className="space-x-2 font-semibold text-md ">
        <span>{c.assignmentTitle}</span>
      </div>

      <div className="flex justify-between pt-4">
        <span className="text-lg font-semibold text-green-600">
          {c.jobDescription}
        </span>

        <span className="text-lg font-semibold text-blue-600">{c.email}</span>
      </div>
      <img
        className="w-24 h-24 object-cover rounded-full mx-auto "
        src={c.photo}
      ></img>
    </div>
  );
}

export default CreativePage;
