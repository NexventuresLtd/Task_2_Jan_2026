import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  features: string[];
}

export default function ServiceCard({
  name,
  description,
  icon,
  href,
  features,
}: ServiceCardProps) {
  return (
    <Link to={href}>
      <div className="card-elevated group h-full overflow-hidden">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/5 p-6 transition-all group-hover:from-primary/20 group-hover:to-secondary/10">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-2xl text-white transition-transform group-hover:scale-110">
            {icon}
          </div>
        </div>

        <div className="space-y-4 p-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>

          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <button className="btn-primary mt-6 w-full">Get Started</button>
        </div>
      </div>
    </Link>
  );
}
