import React from "react";
import WithPhoto from "./WithPhoto";
import {  Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import WithoutPhoto from "./WithoutPhoto";

function App() {
  return (
    <Routes>
  
      <Route path="/" element={<MainLayout />}>
     
        <Route path="With-photo" element={<WithPhoto />} />
        <Route path="Without-Photo" element={<WithoutPhoto />} />
    

      </Route>

    
    </Routes>
  );
}

export default App;
