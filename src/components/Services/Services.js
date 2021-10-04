import React, { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const[services,setServices] = useState([])
    useEffect( ()=>{
        fetch('./moredata.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="mt-3">
            <h2>Our More Services</h2>
          <div className="row">
                {
                services.map(service=> <Service
                    key={service.id} 
                    service={service}
                    ></Service>)
            }
          </div>

        </div>
    );
};

export default Services;