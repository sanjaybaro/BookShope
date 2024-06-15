import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Contacts from "./Contact/Contacts";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-100 dark:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
