import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] =useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])




    return (
        <div>
            <div className="text-center my-20 w-1/2 mx-auto space-y-4">
                <h4 className="text-2xl font-bold ">Service</h4>
                <h3 className="text-5xl font-bold">Our Service Area</h3>
                <p className="text-gray-600">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    services.map(service=> <ServicesCard 
                        key={service._id}
                        service={service}
                        ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;