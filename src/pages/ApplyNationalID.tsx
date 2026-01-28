import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import { useApplications } from "../context/ApplicationContext";
import type { Application } from "../types/application";

export default function ApplyNationalID() {
  const navigate = useNavigate();
  const { addApplication } = useApplications();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    address: "",
    email: "",
    phone: "",
  });

  // Notification state
  const [notifications, setNotifications] = useState<
    { type: string; title: string; message: string }[]
  >([]);
  const [currentNotification, setCurrentNotification] = useState<number | null>(
    null,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      serviceType: "national-id",
      status: "submitted",
      submittedDate: today,
      lastUpdated: today,
      applicantName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      notes: "Your National ID application has been submitted successfully.",
    };

    addApplication(newApplication);

    // Add notifications in sequence
    setNotifications([
      {
        type: "success",
        title: "Application Submitted",
        message:
          "Your National ID application has been submitted successfully.",
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
    setCurrentNotification(0); // start the notification sequence
  };

  // Handle notification sequence
  useEffect(() => {
    if (currentNotification === null) return;
    if (currentNotification >= notifications.length) {
      setCurrentNotification(null); // finished all notifications
      return;
    }

    const timer = setTimeout(() => {
      setCurrentNotification((prev) => (prev !== null ? prev + 1 : null));
    }, 4000); // each notification shows 4s

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
              <span className="text-5xl">✓</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                Application Submitted
              </h2>
              <p className="mt-2 text-muted-foreground">
                Thank you for your National ID application. Please watch the
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
                <span className="text-2xl">🆔</span>
                <span className="text-sm font-semibold text-primary">
                  National ID Application
                </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
                Apply for Your National ID
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Complete this form to apply for your official National ID.
                Processing time is 5-7 business days.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="card-elevated space-y-8 p-8"
            >
              {/* Personal Information */}
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
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="input-field mt-2"
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

              {/* Contact Information */}
              <div className="border-t border-border pt-8">
                <h2 className="mb-6 text-2xl font-semibold text-foreground">
                  Contact Information
                </h2>
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

                <div className="mt-6 form-group">
                  <label className="block text-sm font-medium text-foreground">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="input-field mt-2"
                    placeholder="123 Main St, City, State 12345"
                  />
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
                  Submit Application
                </button>
              </div>
            </form>

            {/* Info Box */}
            <div className="mt-8 rounded-lg border border-border bg-secondary/5 p-6">
              <h3 className="font-semibold text-foreground">
                What to expect next:
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="shrink-0 text-primary">→</span>
                  <span>
                    You will receive a confirmation email within 24 hours
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 text-primary">→</span>
                  <span>
                    Your application will be processed in 5-7 business days
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 text-primary">→</span>
                  <span>
                    You can track your application status anytime on your
                    dashboard
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
