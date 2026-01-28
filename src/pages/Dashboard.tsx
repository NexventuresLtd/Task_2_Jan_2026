import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useApplications } from "../context/ApplicationContext";

const statusStyles: Record<string, string> = {
  approved: "status-approved",
  rejected: "status-rejected",
  submitted: "status-submitted",
  pending: "status-pending",
  reviewing: "status-submitted", // fallback for "under review"
};

const statusLabels: Record<string, string> = {
  approved: "Approved",
  rejected: "Rejected",
  submitted: "Under Review",
  pending: "Pending",
  reviewing: "Under Review",
};

const serviceIcons: Record<string, string> = {
  "national-id": "🆔",
  "health-insurance": "🏥",
  "business-registration": "📋",
};

const serviceNames: Record<string, string> = {
  "national-id": "National ID",
  "health-insurance": "Health Insurance",
  "business-registration": "Business Registration",
};

export default function Dashboard() {
  const { applications } = useApplications();

  // Sort applications: newest first
  const sortedApplications = [...applications].sort(
    (a, b) =>
      new Date(b.submittedDate).getTime() - new Date(a.submittedDate).getTime(),
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="section-container py-12 sm:py-16">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
              My Applications
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Track your government service applications and check their status.
            </p>
          </div>

          {sortedApplications.length === 0 ? (
            <div className="card-elevated py-16 text-center">
              <div className="mx-auto w-full max-w-md space-y-6">
                <div className="text-6xl">📭</div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    No Applications Yet
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    You haven't submitted any applications. Get started by
                    applying for one of our services.
                  </p>
                </div>
                <Link to="/" className="btn-primary inline-block">
                  Browse Services
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="card-elevated p-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      Total Applications
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {applications.length}
                    </p>
                  </div>
                </div>
                <div className="card-elevated p-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      Approved
                    </p>
                    <p className="text-3xl font-bold text-green-600">
                      {
                        applications.filter((a) => a.status === "approved")
                          .length
                      }
                    </p>
                  </div>
                </div>
                <div className="card-elevated p-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      Under Review
                    </p>
                    <p className="text-3xl font-bold text-yellow-600">
                      {
                        applications.filter(
                          (a) =>
                            a.status === "submitted" ||
                            a.status === "reviewing",
                        ).length
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Applications List */}
              <div className="space-y-4">
                {sortedApplications.map((app) => (
                  <div
                    key={app.id}
                    className="card-elevated overflow-hidden transition-all hover:shadow-md"
                  >
                    <div className="p-6">
                      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex gap-4 sm:gap-6">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-2xl">
                            {serviceIcons[app.serviceType] ?? "❓"}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-muted-foreground">
                                {serviceNames[app.serviceType] ??
                                  "Unknown Service"}
                              </p>
                              <h3 className="truncate text-lg font-semibold text-foreground">
                                {app.id}
                              </h3>
                            </div>
                            <div className="mt-2 flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-4">
                              <span>Submitted: {app.submittedDate}</span>
                              <span>Last Updated: {app.lastUpdated}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end lg:flex-col lg:gap-2">
                          <span
                            className={`status-badge ${
                              statusStyles[app.status] ?? "status-submitted"
                            }`}
                          >
                            {statusLabels[app.status] ?? "Under Review"}
                          </span>
                          <Link
                            to={`/applications/${app.id}`}
                            className="btn-outline px-4 py-2 text-sm"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>

                      {app.notes && (
                        <div className="mt-4 border-t border-border pt-4">
                          <p className="text-sm text-muted-foreground">
                            {app.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 rounded-lg border border-border bg-secondary/5 p-8 text-center">
                <h2 className="text-2xl font-semibold text-foreground">
                  Ready for More Services?
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Apply for another government service
                </p>
                <Link to="/" className="btn-primary mt-6 inline-block">
                  View All Services
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
