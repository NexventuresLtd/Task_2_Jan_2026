import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // For now, we'll just simulate submission
    console.log("Message submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20">
          <div className="section-container relative z-10">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-medium">
                📞 Contact Support
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                We're Here to Help
              </h1>

              <p className="text-lg text-white/90">
                Facing issues with GovConnect or have questions? Reach out to us
                via phone, email, or the contact form below.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        </section>

        {/* CONTENT */}
        <section className="section-container py-16 space-y-12">
          {/* Support Info */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card-elevated p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Contact Information
              </h2>
              <p className="text-muted-foreground">
                If you face problems while using the website or need guidance,
                you can contact the responsible institution:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>📞 Phone: 0788888</p>
                <p>📧 Email: info@govconnect.rw</p>
                <p>🏢 Office: Gatsata,Kigali, Rwanda</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-elevated p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Send Us a Message
              </h2>

              {submitted && (
                <div className="mb-4 rounded-lg bg-green-100 p-4 text-green-700">
                  Your message has been submitted. We will get back to you
                  shortly!
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field mt-2 w-full"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field mt-2 w-full"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field mt-2 w-full"
                    placeholder="Issue or question"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field mt-2 w-full resize-none"
                    placeholder="Describe your issue or question"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full mt-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
