import React from "react";
import type { ServiceProps } from "../types/serviceProps";

const ServiceCard: React.FC<ServiceProps> = ({ title, desc, Icon }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform duration-200 hover:shadow-lg hover:scale-105">
      <Icon className="h-16 w-16 text-blue-600 mb-4" />
      <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
      <p className="mt-2 text-center text-gray-600">{desc}</p>
    </div>
  );
};

export default ServiceCard;
