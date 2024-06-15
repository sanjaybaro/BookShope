import React from "react";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Contacts() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-1">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Contacts;
