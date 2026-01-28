import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useApplications } from "../context/ApplicationContext";
import type { Application } from "../types/application";
import Notification from "../components/Notification";

export default function ApplyHealth() {
  const navigate = useNavigate();
  const { addApplication } = useApplications();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    employmentStatus: "",
    dependents: "0",
    coverage: "",
  });

  // Notification state
  const [notifications, setNotifications] = useState<
    { type: string; title: string; message: string }[]
  >([]);
  const [currentNotification, setCurrentNotification] = useState<number | null>(
    null,
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const appId = `APP-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const today = new Date().toISOString().split("T")[0];

    const newApplication: Application = {
      id: appId,
      serviceType: "health-insurance",
      status: "submitted",
      submittedDate: today,
      lastUpdated: today,
      applicantName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      notes:
        "Your health insurance enrollment has been submitted successfully.",
    };

    addApplication(newApplication);

    // Add notifications in sequence
    setNotifications([
      {
        type: "success",
        title: "Application Submitted",
        message:
          "Your health insurance enrollment has been submitted successfully.",
      },
      {
        type: "info",
        title: "Under Review",
        message:
          "Your application is under review. We will get back to you shortly.",
      },
      {
        type: "success",
        title: "Application Approved",
        message: "Congratulations! Your application has been approved.",
      },
    ]);

    setSubmitted(true);
    setCurrentNotification(0); // start the sequence
  };

  // Handle notification sequence
  useEffect(() => {
    if (currentNotification === null) return; // nothing to show
    if (currentNotification >= notifications.length) {
      setCurrentNotification(null); // finished all notifications
      return;
    }

    const timer = setTimeout(() => {
      setCurrentNotification((prev) => (prev !== null ? prev + 1 : null));
    }, 4000); // show each notification for 4 seconds

    return () => clearTimeout(timer);
  }, [currentNotification, notifications]);

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        {/* Notifications */}
        {currentNotification !== null &&
          currentNotification < notifications.length && (
            <div className="fixed top-4 right-4 flex flex-col gap-4 z-50">
              <Notification
                type={notifications[currentNotification].type as any}
                title={notifications[currentNotification].title}
                message={notifications[currentNotification].message}
                autoClose={false} // parent controls timing
              />
            </div>
          )}

        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <span className="text-5xl">🏥</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                Enrollment Submitted
              </h2>
              <p className="mt-2 text-muted-foreground">
                Thank you for your health insurance enrollment. Please watch the
                notifications above for status updates.
              </p>
            </div>
            <button
              onClick={() => navigate("/dashboard")}
              className="btn-primary w-full"
            >
              Go to Dashboard
            </button>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="section-container py-12 sm:py-16">
          <div className="mx-auto max-w-2xl">
            {/* Header */}
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2">
                <span className="text-2xl">🏥</span>
                <span className="text-sm font-semibold text-primary">
                  Health Insurance
                </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
                Enroll in Health Insurance
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose from comprehensive health insurance plans with coverage
                for you and your family.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="card-elevated space-y-8 p-8"
            >
              {/* Personal Info */}
              <div>
                <h2 className="mb-6 text-2xl font-semibold text-foreground">
                  Personal Information
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="form-group">
                    <label className="block text-sm font-medium text-foreground">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="input-field mt-2"
                      placeholder="John"
                    />
                  </div>
                  <div className="form-group">
                    <label className="block text-sm font-medium text-foreground">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="input-field mt-2"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div className="form-group">
                    <label className="block text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field mt-2"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="block text-sm font-medium text-foreground">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field mt-2"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Coverage Info */}
              <div className="border-t border-border pt-8">
                <h2 className="mb-6 text-2xl font-semibold text-foreground">
                  Coverage Information
                </h2>

                <div className="form-group">
                  <label className="block text-sm font-medium text-foreground">
                    Employment Status *
                  </label>
                  <select
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    required
                    className="input-field mt-2"
                  >
                    <option value="">Select employment status</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="retired">Retired</option>
                    <option value="student">Student</option>
                  </select>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div className="form-group">
                    <label className="block text-sm font-medium text-foreground">
                      Number of Dependents *
                    </label>
                    <select
                      name="dependents"
                      value={formData.dependents}
                      onChange={handleChange}
                      required
                      className="input-field mt-2"
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="block text-sm font-medium text-foreground">
                      Coverage Type *
                    </label>
                    <select
                      name="coverage"
                      value={formData.coverage}
                      onChange={handleChange}
                      required
                      className="input-field mt-2"
                    >
                      <option value="">Select coverage type</option>
                      <option value="individual">Individual</option>
                      <option value="family">Family</option>
                      <option value="couple">Couple</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 border-t border-border pt-8 sm:justify-end">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="btn-outline flex-1 sm:flex-initial"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary flex-1 sm:flex-initial"
                >
                  Enroll Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
