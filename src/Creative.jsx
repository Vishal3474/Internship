import React from "react";
import templateData from "./mockdata/templateData";
import CreativePage from "./CreativePage";

function Creative() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-blue-500 ">
        Creative Category
      </h1>
      <div>
        {templateData
          .filter((a) => a.category === "Creative")
          .map((l) => (
            <CreativePage c={l} />
          ))}
      </div>
    </div>
  );
}

export default Creative;
