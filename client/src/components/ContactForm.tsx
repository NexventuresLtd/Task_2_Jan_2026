import React from "react";
const ContactForm:React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Company: NileTech Ltd</h2>
          <p className="mt-2 text-gray-700">
            Email:{" "}
            <a
              href="mailto:niletech@gmail.com"
              className="text-blue-600 hover:underline"
            >
              niletech@gmail.com
            </a>
          </p>
          <p className="mt-1 text-gray-700">Phone: +250 796370747</p>
        </div>
        <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter full name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <textarea
              rows={6}
              placeholder="Write your inquiry..."
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
