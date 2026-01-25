import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-20">
      <div className="flex max-w-3xl flex-col gap-6">
        <h1 className="text-2xl font-semibold text-gray-900 md:text-4xl lg:text-5xl">
          Welcome to Government Service
        </h1>

        <p className="text-sm leading-relaxed text-gray-700 md:text-base lg:text-lg">
          Government Service is a digital public service portal where citizens
          can apply for essential services such as National ID, Driver’s
          License, and Health Insurance, and track application progress through
          a simple, lightweight dashboard.
        </p>

        <div>
          <button
            onClick={() => navigate("/apply-service")}
            className="rounded-md cursor-pointer bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500"
          >
            Apply for a Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
