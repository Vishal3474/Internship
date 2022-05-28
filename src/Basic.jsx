import React from "react";
import BasicData from "./mockdata/BasicData";
import BasicPage from "./BasicPage";

function Basic() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-blue-500 ">
        Basic Category
      </h1>
      <div>
        {BasicData.filter((u) => u.id < 4).map((l) => (
          <BasicPage e={1} />
        ))}
      </div>
    </div>
  );
}

export default Basic;
