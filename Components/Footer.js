import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="/">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="/">Disclaimer</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/">Manage Accounts</a>
                    </li>
                    <li>
                      <a href="/">FAQ's</a>
                    </li>
                    <li>
                      <a href="/">Pending Payments</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="/">Request</a>
                    </li>
                    <li>
                      <a href="/">Helpline</a>
                    </li>
                    <li>
                      <a href="/">Customer Care</a>
                    </li>
                    <li>
                      <a href="/">Manage Your Payments</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.facebook.com/krsanjeetcod7"
                        target="_sanjeet"
                      >
                        <i className="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/realsanjeet_singh/"
                        target="_sanjeet"
                      >
                        <i className="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="https://www.youtube.com/" target="_sanjeet">
                        <i className="fab fa-youtube fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto px-4">
                      <a
                        href="https://www.linkedin.com/in/sanjeet-kumar-67a58921b/"
                        target="_sanjeet"
                      >
                        <i className="fab fa-linkedin fontawesome-style"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-3">
                <p className="main-hero-para text-center w-100">
                  Copyright &copy; {year} Next Js &rarr; <br /> Pvt Ltd. All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
