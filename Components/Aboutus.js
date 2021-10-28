import React, { useState } from "react";
import aboutData from "../pages/api/aboutData";

const Aboutus = () => {
  const [about, setAbout] = useState(aboutData);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mt-3">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img
                src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?crop=entropy&cs=srgb&dl=pexels-energepiccom-2988232.jpg&fit=crop&fm=jpg&h=960&w=1280"
                alt="Aboutus" className="img-fluid"
              />
            </div>
            {/* 1st section right side data */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                -- AVAILABLE @GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading mb-4">How To Use The App &rarr; </h1>
              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info about-data" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border w-25">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="common-section our-services our-services-rightside">
        <div className="container">
          <div className="row">
            {/* 2nd section right side data */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">SUPPORT IN ANY LANGUAGE -- </h3>
              <h1 className="main-heading mb-4">
                World Class Support is <br /> Available 24/7 &rarr;
              </h1>
              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info about-data" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border w-25 mb-5">Learn More</button>
            </div>
            {/* images section */}
            <div className="col-12 col-lg-5 text-center our-service-rightside-img">
              <img
                src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?crop=entropy&cs=srgb&dl=pexels-anna-shvets-4482900.jpg&fit=crop&fm=jpg&h=1920&w=1280"
                alt="Aboutus"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
