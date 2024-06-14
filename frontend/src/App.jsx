import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-100 dark:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
