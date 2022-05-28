import React from "react";
import BasicData from "./mockdata/BasicData";
import BasicPage from "./BasicPage";

function Basic(props) {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-blue-500 ">
        Basic Category
      </h1>
      <div className="flex-col p-10 pt-2 bg-gray-100 ">
        {BasicData.map((b) => {
          console.log(b);
          return (
            <BasicPage
              key={b.id}
              assignmentTitle={b.assignmentTitle}
              jobDescription={b.jobDescription}
              email={b.email}
              photo={b.photo}
            ></BasicPage>
          );
        })}
      </div>
    </div>
  );
}

export default Basic;
