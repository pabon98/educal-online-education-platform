import React from 'react';
import './Cards.css'

const Cards = (props) => {
    const{name,icon}= props.data
    return (
      /*some buttons added for showing popular courses */
      <div className="row w-25 mx-5">
        <button className="bg-primary btn btn-info d-flex justify-content-center align-items-center mx-5 mb-4 border-rounded w-50 px-4 py-3 ">
          <img className="w-25 " src={icon} alt="" />
          <h5>{name}</h5>
        </button>
      </div>
    );
};

export default Cards;