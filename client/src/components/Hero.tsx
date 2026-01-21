import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-20 text-center bg-slate-50">
      <h1 className="text-4xl font-bold text-slate-900 sm:text-6xl">
        Double your income with NileTech
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600 sm:text-xl">
        NileTech is a versatile software development company delivering
        cutting-edge tech solutions for businesses, startups, enterprises, and
        NGOs. We provide services spanning from web and mobile apps to AI
        chatbots.
      </p>
      <button className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200">
        Register now, double your income
      </button>
    </div>
  );
};

export default Hero;
