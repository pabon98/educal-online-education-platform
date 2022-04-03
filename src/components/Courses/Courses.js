import React, { useEffect } from 'react';
import { useState } from 'react';
import "./Courses.css"

const Courses = () => {
  /* using state for storing course data */
    const[courses, setCourses]= useState([])
    /* UseEffect for data loading */
    useEffect( ()=>{
        fetch("./data.json")
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
      <div className="course">
        <div className="row g-2 my-3">
          <h1>Find the right & best online courses for you</h1>
          {courses.slice(0,4).map((course) => (
            <div className="card ms-5 mt-2 mb-4" key={course.id} style={{ width: "25rem" }}>
              <img
                className="img-fluid"
                src={course.image}
                alt=""
              />
              <div className="card-body">
                <h5 className> {course.name}</h5>
               
                <p className>Price: {course.price}</p>
                <a href="..." className="px-3 rounded-2">
                  Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Courses;