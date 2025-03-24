import Image from "next/image";
import React from "react";

const ServiceCard = ({service}) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <Image src={service.img} alt="image" width={400} height={320} />
        <div className="card-body">
          <h2 className="card-title">{service.title}</h2>
          <div className="card-actions justify-end">
            <p className="text-lg text-primary">Price ${service.price}</p>
            <button className="btn btn-primary text-white">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
