import React from "react";
import CreativeData from "./mockdata/CreativeData";
import CreativePage from "./CreativePage";

function Creative(props) {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-blue-500 ">
        Creative Category
      </h1>
      <div className="flex-col p-10 pt-2 bg-gray-100 ">
        {CreativeData.map((c) => {
          console.log(c);
          return (
            <CreativePage
              key={c.id}
              assignmentTitle={c.assignmentTitle}
              jobDescription={c.jobDescription}
              email={c.email}
              photo={c.photo}
            ></CreativePage>
          );
        })}
      </div>
    </div>
  );
}

export default Creative;
