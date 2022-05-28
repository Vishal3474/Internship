import React from "react";
import WithPhoto from "./WithPhoto";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import WithoutPhoto from "./WithoutPhoto";
import Basic from "./Basic";
import Creative from "./Creative";
import Professional from "./Professional";
import All from "./All";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="With-photo" element={<WithPhoto />} />
        <Route path="Without-Photo" element={<WithoutPhoto />} />
        <Route path="Basic" element={<Basic />} />
        <Route path="Creative" element={<Creative />} />
        <Route path="Professional" element={<Professional />} />
        <Route path="All" element={<All />} />
      </Route>
    </Routes>
  );
}

export default App;
