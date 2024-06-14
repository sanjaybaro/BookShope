import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Freebook from "../Components/Freebook";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
