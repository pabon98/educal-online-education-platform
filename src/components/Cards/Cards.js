import React from 'react';
import './Cards.css'

const Cards = (props) => {
    const{name,icon}= props.data
    return (
      /*some buttons added for showing popular courses */
      <div className="row w-25 mx-5">
        <button className="btn btn-info d-flex justify-content-evenly align-items-center mx-5 mb-4 border-rounded w-75 px-3 py-3 ">
          <img className="w-25" src={icon} alt="" />
          <h5>{name}</h5>
        </button>
      </div>
    );
};

export default Cards;