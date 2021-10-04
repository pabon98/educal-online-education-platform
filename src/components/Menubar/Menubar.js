import React from 'react';
import logo from '../../images/logo.png'
import { Link } from "react-router-dom";
import './Menubar.css'

const Menubar = () => {
    return (
      <div className="MenuBar-container">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="logo-img">
                <img className="w-75" src={logo} alt="" />
              </div>
            </div>
            <div className="col-md-10">
              <div className="menu-container ">
                <ul className="d-flex align-items-end justify-content-end">
                  <Link to="/home" className="items">
                    <li>Home</li>
                  </Link>
                  <Link to="/service" className="items">
                    <li>Services</li>
                  </Link>
                  <Link to="/about" className="items">
                    <li>About</li>
                  </Link>
                  <Link to="instructor" className="items">
                    <li>Instructor</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Menubar;