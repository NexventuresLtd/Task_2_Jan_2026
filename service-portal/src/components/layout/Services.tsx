import { services } from "../../data/services";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate=useNavigate()
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-blue-600 md:text-3xl lg:text-4xl">
          Services You Can Access
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:shadow-sm hover:scale-105"
          >
            <h2 className="mb-3 text-lg font-semibold text-blue-600 md:text-xl lg:text-2xl">
              {service.name}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed md:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          onClick={() => navigate("/apply-service")}
          className="rounded-md cursor-pointer bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500"
        >
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default Services;