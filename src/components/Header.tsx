import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-border bg-card shadow-sm">
      <nav className="section-container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg">
            CSP
          </div>
          <span className="hidden text-xl font-bold text-foreground sm:inline">
            Government Services
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hidden sm:inline"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            to="/#service"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg active:scale-95"
          >
            Apply Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
