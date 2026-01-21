import React from "react";
import { data } from "../assets/data";
import ServiceCard from "./ServiceCard";

const ServiceDisplay: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-35 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((service, index) => (
        <div key={index} className="flex justify-center">
          <ServiceCard
            title={service.title}
            desc={service.desc}
            Icon={service.Icon}
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceDisplay;
