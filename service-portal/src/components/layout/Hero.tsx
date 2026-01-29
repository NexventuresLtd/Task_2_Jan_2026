import { useNavigate } from "react-router-dom";
import govPic from "../../assets/govPic.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-8 px-4 py-12 md:py-20">
      <div className="flex flex-col gap-6 md:max-w-xl">
        <h1 className="text-3xl font-bold text-blue-600 md:text-5xl lg:text-6xl leading-tight">
          Welcome to Government Service
        </h1>

        <p className="text-sm text-gray-700 md:text-base lg:text-lg leading-relaxed">
          Government Service is a digital public service portal where citizens
          can apply for essential services such as National ID, Driver’s
          License, and Health Insurance, and track application progress through
          a simple, lightweight dashboard.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-2 cursor-pointer w-max rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Go to Dashboard
        </button>
      </div>

      <div className="hidden md:block md:w-full">
        <img
          className="w-full rounded-xl object-cover shadow-md"
          src={govPic}
          alt="Government Services"
        />
      </div>
    </section>
  );
};

export default Hero;
