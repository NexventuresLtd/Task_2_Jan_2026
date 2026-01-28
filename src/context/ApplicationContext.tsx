import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Application } from "../types/application";

interface ApplicationContextType {
  applications: Application[];
  addApplication: (app: Application) => void;
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
      submittedDate: "2024-01-15",
      lastUpdated: "2024-01-20",
      applicantName: "John Smith",
      email: "john@gmail.com",
      phone: "+250 788 123 456",
      notes: "Application approved and ready for pickup",
    },
    {
      id: "APP-002",
      serviceType: "health-insurance",
      status: "submitted",
      submittedDate: "2024-01-18",
      lastUpdated: "2024-01-18",
      applicantName: "mutoni aline",
      email: "aline@gmail.com",
      phone: "+250 788 654 321",
      notes: "Under review by verification team",
    },
    {
      id: "APP-002",
      serviceType: "health-insurance",
      status: "rejected",
      submittedDate: "2024-01-18",
      lastUpdated: "2024-01-18",
      applicantName: "Derrick muhire",
      email: "derrick@gmail.com",
      phone: "+250 788 987 654",
      notes: "your documents are not complete",
    },
  ]);

  const addApplication = (app: Application) => {
    setApplications([app, ...applications]);
  };

  return (
    <ApplicationContext.Provider value={{ applications, addApplication }}>
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
