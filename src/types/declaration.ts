export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface DeveloperInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  description: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
  };
}
