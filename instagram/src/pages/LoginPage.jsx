import React from "react";
import leftImage from "../assets/instagram-web-lox-image.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import GetTheApp from "../components/GetTheApp";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-betweent">
        <div className="w-100">
          <img alt="Banner" className="img-fluid w-100" src={leftImage} />
        </div>
        <div className="mt-5 absolute_center flex-column align-self-stretch w-100">
          <i
            data-visualcompletion="css-img"
            aria-label="Instagram"
            className="instargram_logo"
            role="img"
          ></i>
          <form className="form w-50">
            <div className="mb-1">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Phone number,username or email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 rounded-3">
              Submit
            </button>
          </form>
          <div className="d-flex align-items-center w-50 my-3">
            <div className="line"></div>
            <span className="mx-3">OR</span>
            <div className="line"></div>
          </div>
          <Link className="text-decoration-none absolute_center" to={"/login"}>
            <FontAwesomeIcon icon={faFacebook} fontSize={20} className="mx-3" />
            Log in with facebook
          </Link>
          <Link className="text-decoration-none text-light my-2">
            Forgot password{" "}
          </Link>
          <p className="mt-5 mb-4">
            Don't have an account?{" "}
            <Link className="text-decoration-none fw-bold fs-6 text-primary">
              Sign up
            </Link>
          </p>
        <GetTheApp/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
