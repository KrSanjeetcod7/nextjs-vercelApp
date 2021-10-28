import React from "react";
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-bg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <i class="fab fa-servicestack fa-2x mx-1"></i> Next-App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link href="/">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              </Link>
              <Link href="/about">
              <li className="nav-item">
                <a className="nav-link">
                  About
                </a>
              </li>
              </Link>
              <Link href="/contact">
              <li className="nav-item">
                <a className="nav-link">
                  Contact
                </a>
              </li>
              </Link>
              <Link href="/service">
              <li className="nav-item">
                <a className="nav-link">
                  Services
                </a>
              </li>
              </Link>
            </ul>
            <form className="d-flex">
              <button className="btn-style" type="submit">
                Log In
              </button>
              <button className="btn-style-border" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
