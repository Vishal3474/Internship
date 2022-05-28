import React from "react";
import templateData from "./mockdata/templateData";
import Page from "./Page";

function WithoutPhoto() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-blue-500 ">
        Without Photo
      </h1>
      <div className="flex-col p-10 pt-2  ">
        {templateData.map((e) => {
          return (
            <Page
              key={e.id}
              assignmentTitle={e.assignmentTitle}
              jobDescription={e.jobDescription}
              email={e.email}
            ></Page>
          );
        })}
      </div>
    </div>
  );
}

export default WithoutPhoto;
