import { useEffect } from "react";
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

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-semibold text-gray-900">
        Application Dashboard
      </h1>

      {applications.length === 0 ? (
        <p className="text-sm text-gray-600">No applications submitted yet.</p>
      ) : (
        <div className="relative overflow-x-auto rounded border">
          <table className="min-w-full text-sm">
            <thead className="bg-blue-50 text-left text-gray-800">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Submitted</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-xs">
                    {app.id.slice(0, 8)}
                  </td>
                  <td className="px-4 py-3">{app.applicationName}</td>
                  <td className="px-4 py-3">{app.applicationType}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded px-2 py-1 text-xs font-medium ${
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
                  <td className="px-4 py-3">{app.submitedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
