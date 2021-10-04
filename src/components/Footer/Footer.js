import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  /* Footer Section */
    return (
      <div>
        <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="left-container text-start">
                  <i className="fas fa-pencil-alt fa-2x "></i>
                  <span className="fs-2 ms-1 text-white">educal</span>
                  <p className="mt-4 ">
                    <small>
                      Great lesson ideas and lesson plans for ESL teachers!{" "}
                      <br />
                      Educators can customize <br /> lesson plans to best.
                    </small>
                    <p className="mt-4 ">
                      <i className="fab fa-facebook-square fa-2x"></i>
                      <i className="fab fa-instagram-square fa-2x ms-3"></i>
                      <i className="fab fa-twitter-square fa-2x ms-3"></i>
                    </p>
                  </p>

                  <p className="mt-5">
                    <small>Zemez © . All rights reserved.</small>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-menu-container">
                  <ul>
                    <Link to="/home" className="footer-menu">
                      <li>Home</li>
                    </Link>
                    <Link to="/service" className="footer-menu">
                      <li>Service</li>
                    </Link>
                    <Link to="/instructor" className="footer-menu">
                      <li>Instructor</li>
                    </Link>
                    <Link to="/about" className="footer-menu">
                      <li> About Us </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-footer-container">
                  <h3>Sign up for the registration</h3>
                  <input
                    className="footer-input"
                    type="text"
                    placeholder="Enter Email"
                  />
                  <button className="p-2">Registration</button>
                  <div className="phone d-flex align-items-center justify-content-center mt-4">
                    <div className="foter-phone-icon"></div>
                    <div>
                      <h5>
                        <i className="fas fa-phone-square-alt"></i> +1 8 800 555
                        35 35
                      </h5>
                    </div>
                  </div>
                  <div className="map d-flex align-items-center justify-content-center">
                    <div className="foter-phone-icon"></div>
                    <div>
                      <p>
                        160 Broadway, New York, NY 10038,
                        <br /> 102 1st Avenue, New York, NY 100
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reserved">
            <hr />
            <p>© 2022 Educal, All Rights Reserved. Design By Theme Pure</p>
          </div>
        </div>
      </div>
    );
};

export default Footer;