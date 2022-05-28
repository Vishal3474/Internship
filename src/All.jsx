import React from "react";

import templateData from "./mockdata/templateData";
import Page from "./Page";

function All(props) {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-blue-500 ">
        All Category
      </h1>
      <div className="flex-col p-10 pt-2 bg-gray-100 ">
        {templateData.map((e) => {
          return (
            <Page
              key={e.id}
              assignmentTitle={e.assignmentTitle}
              jobDescription={e.jobDescription}
              email={e.email}
              photo={e.photo}
            ></Page>
          );
        })}
      </div>
    </div>
  );
}

export default All;
