import React from 'react';
import './Service.css'

const Service = (props) => {
    const{image,name,description,duration,price,visit,level} = props.service
    return (
      <div className="col-md-4 service">
        <div className="card ms-auto me-auto my-5 " style={{ width: "22rem" }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className>{name}</h5>
            <p className>{description.slice(0,150)}
            </p>
            <p>Duration: {duration}</p>
            <p>Level: {level}</p>
            <p>Price:{price}</p>
            <a href={visit} className="btn btn-primary px-4">
              Visit
            </a>
          </div>
        </div>
      </div>
    );
};

export default Service;