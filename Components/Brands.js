import React from "react";
import brandApi from "../pages/api/brandApi";

const Brands = () => {
  // eslint-disable-next-line
  const [brands, setBrands] = React.useState(brandApi);
  return (
    <>
      <div className="container-fluid mt-2 brand-left">
        <h1>our top brand partners --</h1>
        <hr />
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="row">
              {brandApi.map((elem) => {
                return (
                  <>
                    <div
                      className="col-12 col-lg-3 mb-4 brand-sec"
                      key={elem.id}
                    >
                      <img
                        src={elem.logo}
                        alt="brands"
                        className="img-fluid mb-4"
                      />
                      <h2>{elem.title}</h2>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
