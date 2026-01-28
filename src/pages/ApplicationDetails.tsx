import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useApplications } from "../context/ApplicationContext";

const statusStyles = {
  approved: "status-approved",
  rejected: "status-rejected",
  submitted: "status-submitted",
  pending: "status-pending",
};

const statusLabels = {
  approved: "Approved",
  rejected: "Rejected",
  submitted: "Pending Review",
  pending: "Pending",
};

const serviceIcons = {
  "national-id": "🆔",
  "health-insurance": "🏥",
  "business-registration": "📋",
};

const serviceNames = {
  "national-id": "National ID",
  "health-insurance": "Health Insurance",
  "business-registration": "Business Registration",
};

export default function ApplicationDetails() {
  const { id } = useParams<{ id: string }>();
  const { applications } = useApplications();
  const navigate = useNavigate();

  const application = applications.find((app) => app.id === id);

  if (!application) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <div className="section-container py-12 sm:py-16">
            <div className="card-elevated py-16 text-center">
              <div className="mx-auto w-full max-w-md space-y-6">
                <div className="text-6xl">❌</div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    Application Not Found
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    The application with ID{" "}
                    <span className="font-mono font-semibold">{id}</span> could
                    not be found.
                  </p>
                </div>
                <Link to="/dashboard" className="btn-primary inline-block">
                  Back to Dashboard
                </Link>
              </div>
            </div>
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
          {/* Page Header */}
          <div className="mb-12">
            <button
              onClick={() => navigate("/dashboard")}
              className="mb-6 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>←</span>
              <span>Back to Dashboard</span>
            </button>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
              Application Details
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              View full information about your submitted application
            </p>
          </div>

          <div className="space-y-8">
            {/* Application Summary Card */}
            <div className="card-elevated p-8">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-4xl">
                    {
                      serviceIcons[
                        application.serviceType as keyof typeof serviceIcons
                      ]
                    }
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {
                        serviceNames[
                          application.serviceType as keyof typeof serviceNames
                        ]
                      }
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Application ID:{" "}
                      <span className="font-mono font-semibold text-foreground">
                        {application.id}
                      </span>
                    </p>
                  </div>
                </div>
                <span
                  className={`status-badge ${statusStyles[application.status as keyof typeof statusStyles]}`}
                >
                  {
                    statusLabels[
                      application.status as keyof typeof statusLabels
                    ]
                  }
                </span>
              </div>

              {/* Summary Grid */}
              <div className="mt-8 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Submitted Date
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    {application.submittedDate}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Last Updated
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    {application.lastUpdated}
                  </p>
                </div>
              </div>
            </div>

            {/* Applicant Information */}
            <div className="card-elevated p-8">
              <h3 className="text-xl font-bold text-foreground">
                Applicant Information
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Full Name
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    {application.applicantName}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    {application.email}
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Phone Number
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    {application.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Application Details - Service Specific */}
            <div className="card-elevated p-8">
              <h3 className="text-xl font-bold text-foreground">
                Application Details
              </h3>
              <div className="mt-6 space-y-4 text-muted-foreground">
                {application.serviceType === "national-id" && (
                  <div>
                    <p className="text-sm">
                      You have applied for a National ID. Your application
                      includes identity verification and documentation review.
                    </p>
                  </div>
                )}
                {application.serviceType === "health-insurance" && (
                  <div>
                    <p className="text-sm">
                      You have applied for Health Insurance enrollment. Your
                      application includes coverage selection and eligibility
                      verification.
                    </p>
                  </div>
                )}
                {application.serviceType === "business-registration" && (
                  <div>
                    <p className="text-sm">
                      You have applied for Business Registration. Your
                      application includes business verification and compliance
                      review.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Officer Notes / Remarks */}
            {application.notes && (
              <div className="card-elevated border-l-4 border-l-primary/50 p-8">
                <h3 className="text-xl font-bold text-foreground">
                  Officer Notes
                </h3>
                <p className="mt-4 text-muted-foreground">
                  {application.notes}
                </p>
              </div>
            )}

            {/* Status Information */}
            <div className="card-elevated p-8">
              <h3 className="text-xl font-bold text-foreground">
                Status Information
              </h3>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Current Status
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    {
                      statusLabels[
                        application.status as keyof typeof statusLabels
                      ]
                    }
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground">
                    {application.status === "approved" &&
                      "Your application has been approved. Please proceed to the next steps."}
                    {application.status === "rejected" &&
                      "Unfortunately, your application was not approved. Please contact us for more information."}
                    {application.status === "submitted" &&
                      "Your application is under review. We will notify you once we have updates."}
                    {application.status === "pending" &&
                      "Your application is pending. We are processing your request."}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
              <Link to="/dashboard" className="btn-outline px-6 py-3">
                Back to Dashboard
              </Link>
              <Link to="/" className="btn-primary px-6 py-3">
                Apply for Another Service
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
