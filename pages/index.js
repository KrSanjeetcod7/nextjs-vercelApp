import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Aboutus from "../Components/Aboutus";
import Service from "../Components/Service";
import Brands from "../Components/Brands";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutus />
      <Service />
      <Brands />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
