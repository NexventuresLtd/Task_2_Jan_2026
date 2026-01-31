import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Application } from "../types/application";

interface ApplicationContextType {
  applications: Application[];
  addApplication: (app: Application) => void;
  updateApplicationStatus: (
    id: string,
    status: Application["status"],
    note?: string,
  ) => void;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(
  undefined,
);

export function ApplicationProvider({ children }: { children: ReactNode }) {
  const [applications, setApplications] = useState<Application[]>([
    {
      id: "APP-001",
      serviceType: "national-id",
      status: "approved",
      submittedDate: "2026-01-15",
      lastUpdated: "2026-01-20",
      applicantName: "John Smith",
      email: "john@gmail.com",
      phone: "+250 788 123 456",
      notes: "Application approved and ready for pickup",
    },
    {
      id: "APP-002",
      serviceType: "health-insurance",
      status: "submitted",
      submittedDate: "2026-01-18",
      lastUpdated: "2026-01-18",
      applicantName: "Mutoni Aline",
      email: "aline@gmail.com",
      phone: "+250 788 654 321",
      notes: "Under review by verification team",
    },
    {
      id: "APP-003",
      serviceType: "health-insurance",
      status: "rejected",
      submittedDate: "2024-01-18",
      lastUpdated: "2024-01-18",
      applicantName: "Derrick Muhire",
      email: "derrick@gmail.com",
      phone: "+250 788 987 654",
      notes: "Your documents are not complete",
    },
  ]);

  const addApplication = (app: Application) => {
    setApplications((prev) => [app, ...prev]);
  };

  const updateApplicationStatus = (
    id: string,
    status: Application["status"],
    note?: string,
  ) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === id
          ? {
              ...app,
              status,
              lastUpdated: new Date().toISOString().split("T")[0],
              notes: note ?? app.notes,
            }
          : app,
      ),
    );
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        addApplication,
        updateApplicationStatus,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplications() {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error("useApplications must be used within ApplicationProvider");
  }
  return context;
}
