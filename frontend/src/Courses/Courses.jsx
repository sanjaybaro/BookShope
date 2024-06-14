import React from "react";
import Course from "../Components/Course";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-1">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
