import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import ServiceDisplay from "../components/ServiceDisplay";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <div className="w-full bg-gray-100 py-8">
        <ServiceDisplay />
      </div>
      <div className="w-full bg-white py-8">
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
