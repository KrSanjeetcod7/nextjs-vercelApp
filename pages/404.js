import React, { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  const backToHome = () => {
    router.push("/");
  };
  useEffect(() => {
    setTimeout(() => {
      backToHome();
    }, 3000);
  }, []);
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>we are sorry Page Not found!!</h2>
          <p>the page you are looking for does not exist or removed</p>
          <a onClick={backToHome}>back to homepage</a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
