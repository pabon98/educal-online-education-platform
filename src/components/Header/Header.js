import React from 'react';
import './Header.css'
import img from '../../images/header image.png'
import Menubar from '../Menubar/Menubar';

const Header = () => {
    return (
      <div className="header">
        <div className="row d-flex justify-content-center align-items-center p-4">
            <Menubar></Menubar>
          <div className="col-md-6">
            <h1 className="fs-1 mx-4">
              Access 2700+ <br /> Online Tutorial From <br />  Top Instructor.
            </h1>
            <button className="border-2 p-2 mt-3">View All Courses</button>
          </div>
          <div className="col-md-6">
          <img className="w-75" src={img} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Header;