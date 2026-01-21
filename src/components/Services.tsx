import { type Service } from "../types/declaration";

const services: Service[] = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive, modern UI with React, TypeScript, and Tailwind CSS. Creating engaging user experiences with smooth animations and interactions.",
    icon: "🎨",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Developing scalable APIs with Node.js, Express, and databases like MongoDB. Ensuring security, performance, and reliability.",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Full Stack Solutions",
    description:
      "Delivering complete web applications from design to deployment. Handling both frontend and backend with modern best practices.",
    icon: "🚀",
  },
  {
    id: 4,
    title: "Database Design",
    description:
      "Creating efficient database schemas and implementing proper data management strategies. Optimization for speed and scalability.",
    icon: "🗄️",
  },
  {
    id: 5,
    title: "UI Design",
    description:
      "Creating visually appealing and user-friendly interfaces. Focusing on layout, color schemes, typography, and responsive design.",
    icon: "🎨",
  },

  {
    id: 6,
    title: "Deployment & Hosting",
    description:
      "Deploying applications to cloud platforms like Vercel, Netlify, or AWS. Setting up CI/CD pipelines for continuous integration.",
    icon: "☁️",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-800 text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Services & <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Here are the main services I offer and the areas where I excel as a
            developer. Each service is crafted with attention to detail and best
            practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-700 rounded-lg p-8 hover:bg-slate-600 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-blue-400">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Interested in working together? Let's discuss your project!
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
