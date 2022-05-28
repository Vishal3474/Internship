import React from "react";
import templateData from "./mockdata/templateData";

import ProfessionalPage from "./ProfessionalPage";

function Professional() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-blue-500 ">
        Professional Category
      </h1>
      <div>
        {templateData
          .filter((u) => u.category === "Professional")
          .map((l) => (
            <ProfessionalPage e={l} />
          ))}
      </div>
    </div>
  );
}

export default Professional;
