import { services } from "../data/services"
const Services = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl">
          Services You Can Access
        </h1>
        <p className="mt-2 text-sm text-gray-600 md:text-base">
          Apply for essential government services easily and track your
          progress.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-lg border bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <h2 className="mb-2 text-lg font-medium text-gray-900">
              {service.name}
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

