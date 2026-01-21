import React from "react";

import { useState } from "react";
import { type ContactForm } from "../types/declaration";

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for reaching out! I will get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Have a project in mind or want to collaborate? Send me a message and
            I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="flex items-start gap-4">
              <div className="text-blue-400 text-2xl">✉️</div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Email</h4>
                <p className="text-gray-400">mahorobelyse1@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-blue-400 text-2xl">📱</div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Phone</h4>
                <p className="text-gray-400">+250787488939</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="text-blue-400 text-2xl">📍</div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Location</h4>
                <p className="text-gray-400">Rwanda, Kigali</p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-4">
              <div className="text-blue-400 text-2xl">⏰</div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Availability</h4>
                <p className="text-gray-400">
                  Available for full-time and freelance projects
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition duration-300"
                placeholder="Becky"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition duration-300"
                placeholder="becky@example.com"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            I typically respond to messages within 24 hours. Looking forward to
            hearing from you!
          </p>
        </div>
      </div>
    </section>
  );
}
