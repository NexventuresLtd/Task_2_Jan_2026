import type { Service } from "../types/application";

export const services: Service[] = [
  {
    id: "national-id",
    name: "National ID Application",
    description:
      "Apply for your official National ID with streamlined processing",
    features: [
      "Fast processing (5-7 business days)",
      "Secure document upload",
      "Real-time status tracking",
      "Online appointment booking",
    ],
  },
  {
    id: "health-insurance",
    name: "Health Insurance Enrollment",
    description:
      "Enroll in health insurance plans with comprehensive coverage options",
    features: [
      "Multiple plan options",
      "Family coverage available",
      "Instant enrollment confirmation",
      " 24/7 customer support",
    ],
  },
  {
    id: "business-registration",
    name: "Business Registration",
    description: "Register your business legally and start operations quickly",
    features: [
      "All business types supported",
      "Tax ID generation",
      "Legal compliance guidance",
      "Document archiving",
    ],
  },
];
