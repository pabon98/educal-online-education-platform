import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Courses from '../Courses/Courses';
import './Home.css'

const Home = () => {
  /* UseState for storing data */
    const[datas,setData] = useState([])
    /* UseEffect for data loading */
    useEffect( ()=>{
        fetch("./data.json")
        .then(res=> res.json())
        .then(data=> setData(data))
    },[])
    console.log(datas)
    return (
      <div className="home mt-4">
        <h1>Explore Our Popular Courses </h1>
        <br />
        <div className="row ">
          {datas.map((data) => (
           /* Cards component calling */
            <Cards 
            data={data} 
            key={data.id}>
            </Cards>        
          ))}
          <Courses></Courses>
        </div>

      </div>
    );
};

export default Home;