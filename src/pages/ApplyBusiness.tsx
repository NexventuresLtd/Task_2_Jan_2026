import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import { useApplications } from "../context/ApplicationContext";
import type { Application } from "../types/application";

export default function ApplyBusiness() {
  const navigate = useNavigate();
  const { addApplication } = useApplications();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    ownerName: "",
    businessName: "",
    businessType: "",
    businessAddress: "",
    email: "",
    phone: "",
  });

  // Notifications state
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
      serviceType: "business-registration",
      status: "submitted",
      submittedDate: today,
      lastUpdated: today,
      applicantName: formData.ownerName,
      email: formData.email,
      phone: formData.phone,
      notes:
        "Your business registration application has been submitted successfully.",
    };

    addApplication(newApplication);

    // Notifications sequence
    setNotifications([
      {
        type: "success",
        title: "Application Submitted",
        message:
          "Your business registration application has been submitted successfully.",
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
        message:
          "Congratulations! Your business application has been approved.",
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
                autoClose={false}
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
                Thank you for your business registration application. Please
                watch the notifications above for status updates.
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
                <span className="text-2xl">📋</span>
                <span className="text-sm font-semibold text-primary">
                  Business Registration
                </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
                Register Your Business
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Complete this form to register your business legally. Get your
                Tax ID and start operations.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="card-elevated space-y-8 p-8"
            >
              {/* Owner Information */}
              <div>
                <h2 className="mb-6 text-2xl font-semibold text-foreground">
                  Owner Information
                </h2>
                <div className="form-group">
                  <label className="block text-sm font-medium text-foreground">
                    Business Owner Name *
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    required
                    className="input-field mt-2"
                    placeholder="Michael Chen"
                  />
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
                      placeholder="michael@example.com"
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

              {/* Business Information */}
              <div className="border-t border-border pt-8">
                <h2 className="mb-6 text-2xl font-semibold text-foreground">
                  Business Information
                </h2>
                <div className="form-group">
                  <label className="block text-sm font-medium text-foreground">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="input-field mt-2"
                    placeholder="Tech Solutions LLC"
                  />
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div className="form-group">
                    <label className="block text-sm font-medium text-foreground">
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="input-field mt-2"
                    >
                      <option value="">Select business type</option>
                      <option value="sole-proprietor">Sole Proprietor</option>
                      <option value="llc">LLC</option>
                      <option value="s-corp">S-Corporation</option>
                      <option value="c-corp">C-Corporation</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="block text-sm font-medium text-foreground">
                      Business Address *
                    </label>
                    <input
                      type="text"
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleChange}
                      required
                      className="input-field mt-2"
                      placeholder="123 Business Ave, City, State 12345"
                    />
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
                  Register Business
                </button>
              </div>
            </form>

            {/* Info Box */}
            <div className="mt-8 rounded-lg border border-border bg-secondary/5 p-6">
              <h3 className="font-semibold text-foreground">
                What You'll Receive:
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="shrink-0 text-primary">→</span>
                  <span>Federal Employer ID Number (EIN)</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 text-primary">→</span>
                  <span>Business registration certificate</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 text-primary">→</span>
                  <span>Tax filing recommendations</span>
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
