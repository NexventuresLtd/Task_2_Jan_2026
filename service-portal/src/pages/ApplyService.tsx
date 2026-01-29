import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import type { Application, ApplicationType } from "../types/application";
import InputField from "../components/forms/InputField";
import SelectField from "../components/forms/SelectField";
import Button from "../components/ui/Button";

interface ApplyServiceProps {
  setApplications: React.Dispatch<React.SetStateAction<Application[]>>;
}

interface FormValues {
  applicationName: string;
  applicationType: ApplicationType | "";
  email:string;
  phone:string;
}

interface FormErrors {
  applicationName?: string;
  applicationType?: string;
  email?:string,
  phone?:string
}

const ApplyService = ({ setApplications }: ApplyServiceProps) => {
  const [values, setValues] = useState<FormValues>({
    applicationName: "",
    applicationType: "",
    email:"",
    phone:""
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!values.applicationName.trim()) {
      newErrors.applicationName = "Full name is required";
    }

    if(!values.email || !values.email.includes('@')){
      newErrors.email="Please, enter a valid email address"
    }
    if(!values.phone || Number.isNaN(Number(values.phone))){
      newErrors.phone="Please, enter a valid phone number"
    }

    if (!values.applicationType) {
      newErrors.applicationType = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    const newApplication: Application = {
      id: crypto.randomUUID(),
      applicationName: values.applicationName,
      applicationType: values.applicationType,
      email:values.email,
      phone:values.phone,
      applicationStatus: "Submitted",
      submitedAt: new Date().toISOString().split("T")[0],
    };

    setApplications((prev) => [...prev, newApplication]);

    toast.success("Application submitted successfully");

    setValues({
      applicationName: "",
      applicationType: "",
      email:"",
      phone:""
    });

    setErrors({});
  };

  return (
    <section className="mx-auto px-4 py-10 sm:px-6 lg:px-20 lg:py-16">
      <div className="max-w-lg w-full mx-auto lg:max-w-3xl bg-white shadow-md rounded-lg p-6 sm:p-8 lg:p-12">
        <div className="flex items-center justify-between gap-3">
          <h1 className="mb-6 text-2xl sm:text-3xl font-semibold text-gray-900 text-center lg:text-left">
            Apply for a Service
          </h1>
          <button className="md:hidden text-sm font-medium text-blue-600">
            <Link to="/dashboard">Dashboard →</Link>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <InputField
            label="Full Name"
            name="applicationName"
            value={values.applicationName}
            error={errors.applicationName}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            name="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
          />

          <InputField
            label="Phone Number"
            name="phone"
            value={values.phone}
            error={errors.phone}
            onChange={handleChange}
          />

          <SelectField
            label="Service Type"
            name="applicationType"
            value={values.applicationType}
            error={errors.applicationType}
            onChange={handleChange}
            options={[
              { label: "National ID", value: "National ID" },
              { label: "Driving License", value: "Driving License" },
              { label: "Health Insurance", value: "Health Insurance" },
            ]}
          />

          <Button type="submit" className="w-full sm:w-auto">
            Submit Application
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ApplyService;
