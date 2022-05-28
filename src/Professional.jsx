import React from "react";
import ProfessionalData from "./mockdata/ProfessionalData";

import ProfessionalPage from "./ProfessionalPage";

function Professional(props) {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-blue-500 ">
        Professional Category
      </h1>
      <div className="flex-col p-10 pt-2 bg-gray-100 ">
        {ProfessionalData.map((p) => {
          console.log(p);
          return (
            <ProfessionalPage
              key={p.id}
              assignmentTitle={p.assignmentTitle}
              jobDescription={p.jobDescription}
              email={p.email}
              photo={p.photo}
            ></ProfessionalPage>
          );
        })}
      </div>
    </div>
  );
}

export default Professional;
