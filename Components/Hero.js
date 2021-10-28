import React from "react";
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-12 mx-auto">
            <div className="row">
              <div className="col-12 col-lg-6 hero-left-side">
                <h1 className="main-heading">Welcome to next js framework</h1>
                <h2>
                  grow
                  <span className="span-text">your business with us--</span>
                </h2>
                <p className="main-hero-para">
                  we provide the best framework for your
                </p>
                <span className="span-text">website development</span> <i class="fas fa-layer-group fa-3x mx-3"></i>
                <hr />
                <h4>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quasi impedit officia quibusdam consequatur veritatis possimus
                  autem fuga eos, praesentium, esse facilis repellendus
                  temporibus harum?
                </h4>
                <hr />
                <h3>Get Early Access for you</h3>
                <div className="input-group mt-3 mb-5">
                  <input
                    type="text"
                    className="rounded-pill w-75 p-2 w-lg-75 me-3 form-control-text"
                    placeholder="Enter Your Email"
                  />
                  <div className="input-group-button">Subscribe</div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mx-auto hero-right-side">
                  <Image src="/dev.webp" width="500" height="500"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
