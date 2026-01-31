import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) setCurrentUser(JSON.parse(user));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/"); // redirect to home
  };

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

          {/* Show Dashboard only if logged in */}
          {currentUser && (
            <Link
              to="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
          )}

          {/* Show Login/Signup if logged out */}
          {!currentUser && (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Signup
              </Link>
            </>
          )}

          {/* Apply Now Button */}
          <Link
            to={currentUser ? "/apply-health" : "/login"}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg active:scale-95"
          >
            Apply Now
          </Link>

          {/* Logout button if logged in */}
          {currentUser && (
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-red-600 hover:text-red-500 transition-colors"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
