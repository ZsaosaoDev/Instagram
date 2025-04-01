import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import GetTheApp from "../components/GetTheApp";
import OR from "../components/OR";

const RegisterPage = () => {
  return (
    <div className="container">
      <div className="absolute_center flex-column">
        <div className="w-100 absolute_center">
        <div className=" rounded px-4 w-50  mt-5 absolute_center flex-column">
          <i
            data-visualcompletion="css-img"
            aria-label="Instagram"
            className="instargram_logo mb-2"
            role="img"
          ></i>
          <p className="w-50 fs-5 text-wrap text-center">
            Sign up to see photos and videos from your friends.
          </p>
          <Link
            className="text-decoration-none absolute_center btn btn-primary w-50 mb-2"
            to={"/login"}
          >
            <FontAwesomeIcon icon={faFacebook} fontSize={20} className="mx-3" />
            Log in with facebook
          </Link>
          <OR />

          <form className="form w-50">
            <div className="mb-2">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Phone number,username or email"
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <p className=" text-wrap text-center">People who use our service may have uploaded your contact information to Instagram. Learn More</p>
            <p className="text-wrap text-center">By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
            <button type="submit" className="btn btn-primary w-100 rounded-3 mb-4">
              Sign up
            </button>
          </form>
        </div>
        </div>
        <GetTheApp />

      </div>
    </div>
  );
};

export default RegisterPage;
