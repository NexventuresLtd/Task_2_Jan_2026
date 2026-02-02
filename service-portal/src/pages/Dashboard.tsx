import { useEffect, useMemo } from "react";
import type { Application, ApplicationStatus } from "../types/application";

interface DashboardProps {
  applications: Application[];
  setApplications: React.Dispatch<React.SetStateAction<Application[]>>;
}

const Dashboard = ({ applications, setApplications }: DashboardProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setApplications((prev) =>
        prev.map((app) => {
          if (app.applicationStatus === "Submitted") {
            return { ...app, applicationStatus: "Under-Review" };
          }

          if (app.applicationStatus === "Under-Review") {
            const newStatus: ApplicationStatus =
              Math.random() > 0.5 ? "Approved" : "Rejected";
            return { ...app, applicationStatus: newStatus };
          }

          return app;
        }),
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [setApplications]);

  const latestApp = useMemo(
    () => applications[applications.length - 1],
    [applications],
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 space-y-8">
      <div className="rounded-xl border border-blue-400 bg-white p-6 shadow-sm">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
          Welcome{latestApp ? `, ${latestApp.applicationName}!` : ""}
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          You currently have{" "}
          <span className="font-medium text-blue-600">
            {applications.length}
          </span>{" "}
          application(s).
        </p>
      </div>

      {latestApp && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-blue-400 p-4">
            <p className="text-xs uppercase text-gray-500">Email</p>
            <p className="font-medium text-gray-900">{latestApp.email}</p>
          </div>

          <div className="rounded-lg border border-blue-400 p-4">
            <p className="text-xs uppercase text-gray-500">Phone</p>
            <p className="font-medium text-gray-900">{latestApp.phone}</p>
          </div>
        </div>
      )}

      {applications.length === 0 ? (
        <p className="text-sm text-gray-600">No applications submitted yet.</p>
      ) : (
        <div className="rounded-xl border border-blue-400 bg-white shadow-sm">
          <div className="relative overflow-x-auto">
            <table className="min-40 md:min-w-225 text-sm">
              <thead className="sticky top-0 bg-blue-50 text-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left">ID</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Service</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Submitted</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">
                      {app.id.slice(0, 8)}
                    </td>
                    <td className="px-4 py-3">{app.applicationName}</td>
                    <td className="px-4 py-3">{app.applicationType}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                          app.applicationStatus === "Submitted"
                            ? "bg-gray-100 text-gray-700"
                            : app.applicationStatus === "Under-Review"
                              ? "bg-yellow-100 text-yellow-700"
                              : app.applicationStatus === "Approved"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }`}
                      >
                        {app.applicationStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {app.submitedAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
