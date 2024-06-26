import React from "react";
import PropTypes from "react";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';

export default function Navbar(props) {

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode === "light" ? "dark" : "light"
      } bg-${props.mode === "light" ? "dark" : "light"}`}
    >
      
      <div className="container-fluid">
        
        <a className="navbar-brand" href="/">
          {props.title}
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
           
          </ul>
          <GoogleLogin
            onSuccess={credentialResponse => {
              const credentialResDecoded= jwtDecode(credentialResponse.credential);
              console.log(credentialResDecoded)
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />;

          <div className={`form-check form-switch text-${props.mode}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Inverse View
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};
