import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  features: string[];
  detailsHref: string;
}

export default function ServiceCard({
  name,
  description,
  icon,
  features,
  detailsHref,
}: ServiceCardProps) {
  return (
    <div className="card-elevated group flex h-full flex-col overflow-hidden">
      {/* Icon section */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/5 p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-2xl text-white">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>

        <ul className="mt-4 space-y-2 text-sm text-foreground">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-primary font-bold">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Action */}
        <Link to={detailsHref} className="btn-primary mt-6 text-center">
          View Details
        </Link>
      </div>
    </div>
  );
}
