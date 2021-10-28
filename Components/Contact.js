import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    cpassword: "",
    message: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, phone, address, password, cpassword, message } =
      userData;
    if (name && email && phone && address && password && cpassword && message) {
      const url =
        "https://nextjs-firebasewebsite-default-rtdb.firebaseio.com/nextData.json";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          password,
          cpassword,
          message,
        }),
      });
      if (res) {
        setUserData({
          name: "",
          email: "",
          phone: "",
          address: "",
          password: "",
          cpassword: "",
          message: "",
        });
        toast.success('Registered Successfully...',{
            position:"top-center",
            autoClose:4000
        });
      } else {
        toast.dark('Plz fill the form...',{
            position:"top-center"
        });
      }
    } else {
        toast.error('Plz fill the form...',{
            position:"top-center"
        });
    }
  };
  return (
    <>
      <div className="container-fluid contact-bg">
        <h1>Contact Us &rarr; </h1>
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="row">
              <div className="col-12 col-lg-7 mx-auto contact-left-side mt-2">
                <form method="POST">
                  <div className="row">
                    <div className="col-12 col-lg-6 contact-field">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id=""
                        className="form-control"
                        placeholder="Your Name"
                        value={userData.name}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="col-12 col-lg-6 contact-field">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Email-ID
                      </label>
                      <input
                        type="email"
                        name="email"
                        id=""
                        className="form-control"
                        placeholder="someone@gmail.com"
                        value={userData.email}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-lg-6 contact-field">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Phone
                      </label>
                      <input
                        type="number"
                        name="phone"
                        id=""
                        className="form-control"
                        placeholder="+91"
                        value={userData.phone}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="col-12 col-lg-6 contact-field">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id=""
                        className="form-control"
                        placeholder="Patna"
                        value={userData.address}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-lg-6 contact-input">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id=""
                        className="form-control"
                        placeholder="******"
                        value={userData.password}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="col-12 col-lg-6 contact-input">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="cpassword"
                        id=""
                        className="form-control"
                        placeholder="******"
                        value={userData.cpassword}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 contact-input">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Message
                        </label>
                        <input
                          className="form-control"
                          name="message"
                          id="exampleFormControlTextarea1"
                          value={userData.message}
                          onChange={handleInput}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="form-check form-checkbox-style">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label">
                      I agree to the Terms & Conditions For this Payment etc.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn-style w-75 mt-3"
                    onClick={submitData}
                  >
                    Register &rarr;
                  </button>
                  <ToastContainer />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
