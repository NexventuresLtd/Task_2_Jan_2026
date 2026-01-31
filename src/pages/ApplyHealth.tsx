import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import { useApplications } from "../context/ApplicationContext";
import type { Application } from "../types/application";
import type { ApplicationStatus } from "../types/application";

export default function ApplyHealth() {
  const navigate = useNavigate();
  const { addApplication, updateApplicationStatus } = useApplications();

  /* 🔐 AUTH CHECK */
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/login", { state: { from: "/apply-health" } });
    }
  }, [navigate]);

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

  /* 🔔 NOTIFICATION STATE */
  const [notifications, setNotifications] = useState<
    { type: "success" | "info" | "error"; title: string; message: string }[]
  >([]);

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* =========================
     📝 SUBMIT APPLICATION
     ========================= */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const id = `APP-${Date.now()}`;
    const today = new Date().toISOString().split("T")[0];

    const application: Application = {
      id,
      serviceType: "health-insurance",
      status: "submitted",
      submittedDate: today,
      lastUpdated: today,
      applicantName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      notes: "Application submitted successfully",
    };

    addApplication(application);

    /* 🔔 SET NOTIFICATION FLOW */
    setNotifications([
      {
        type: "success",
        title: "Application Submitted",
        message: "Thank you for applying. Your application has been submitted.",
      },
      {
        type: "info",
        title: "Under Review",
        message: "Your application is currently under review.",
      },
      {
        type: "success",
        title: "Approved",
        message: "Your health insurance application has been approved.",
      },
    ]);

    setSubmitted(true);
    setActiveIndex(0);

    /* ⏳ SIMULATED STATUS UPDATES */
    setTimeout(() => {
      updateApplicationStatus(id, "under_review" as ApplicationStatus);
    }, 4000);

    setTimeout(() => {
      updateApplicationStatus(id, "approved" as ApplicationStatus);
    }, 8000);
  };

  /* =========================
     🔔 SEQUENTIAL NOTIFICATIONS
     ========================= */
  useEffect(() => {
    if (activeIndex < 0) return;
    if (activeIndex >= notifications.length - 1) return;

    const timer = setTimeout(() => {
      setActiveIndex((prev) => prev + 1);
    }, 4000);

    return () => clearTimeout(timer);
  }, [activeIndex, notifications]);

  /* =========================
     ✅ SUBMITTED VIEW
     ========================= */
  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        {activeIndex >= 0 && notifications[activeIndex] && (
          <div className="fixed top-4 right-4 z-50">
            <Notification
              type={notifications[activeIndex].type}
              title={notifications[activeIndex].title}
              message={notifications[activeIndex].message}
              autoClose={false}
            />
          </div>
        )}

        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <span className="text-5xl">🏥</span>
            </div>

            <h2 className="text-3xl font-bold text-foreground">
              Enrollment Submitted
            </h2>

            <p className="text-muted-foreground">
              Please follow the notification updates above.
            </p>

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

  /* =========================
     🧾 ORIGINAL FORM (UNCHANGED)
     ========================= */
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="section-container py-12 sm:py-16">
          <div className="mx-auto max-w-2xl">
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
                Choose comprehensive health insurance coverage for you and your
                family.
              </p>
            </div>

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
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                    className="input-field"
                  />
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last Name"
                    className="input-field"
                  />
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="input-field"
                  />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone"
                    className="input-field"
                  />
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="mb-6 text-2xl font-semibold text-foreground">
                  Coverage Information
                </h2>

                <select
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  required
                  className="input-field"
                >
                  <option value="">Employment Status</option>
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self-employed</option>
                  <option value="unemployed">Unemployed</option>
                </select>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <select
                    name="dependents"
                    value={formData.dependents}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="0">0 Dependents</option>
                    <option value="1">1 Dependent</option>
                    <option value="2">2 Dependents</option>
                  </select>

                  <select
                    name="coverage"
                    value={formData.coverage}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Coverage Type</option>
                    <option value="individual">Individual</option>
                    <option value="family">Family</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4 pt-8">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="btn-outline flex-1"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary flex-1">
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
