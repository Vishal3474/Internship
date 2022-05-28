import React from "react";
import templateData from "./mockdata/templateData";
import BasicPage from "./BasicPage";

function Basic() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-blue-500 ">
        Basic Category
      </h1>
      <div>
        {templateData
          .filter((u) => u.category === "Basic")
          .map((l) => (
            <BasicPage e={l} />
          ))}
      </div>
    </div>
  );
}

export default Basic;
