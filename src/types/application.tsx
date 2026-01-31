export type ApplicationStatus =
  | "submitted"
  | "approved"
  | "rejected"
  | "pending"
  | "reviewing"
  | "under_review";
export type ServiceType =
  | "national-id"
  | "health-insurance"
  | "business-registration";

export interface Application {
  id: string;
  serviceType: ServiceType;
  status: ApplicationStatus;
  submittedDate: string;
  lastUpdated: string;
  applicantName: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface NationalIDApplication extends Application {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
}

export interface HealthInsuranceApplication extends Application {
  employmentStatus: string;
  dependents: number;
  coverage: string;
}

export interface BusinessRegistrationApplication extends Application {
  businessName: string;
  businessType: string;
  businessAddress: string;
}

export interface Service {
  id: ServiceType;
  name: string;
  description: string;
  features: string[];
}
