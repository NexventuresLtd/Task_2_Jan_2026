import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="section-container space-y-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-white font-bold text-sm">
                CSP
              </div>
              <span className="font-semibold text-foreground">
                Government Services
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Streamlined public services for citizens. Fast approvals,
              transparent tracking, secure submissions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/apply-national-id"
                  className="hover:text-foreground transition"
                >
                  National ID
                </Link>
              </li>
              <li>
                <Link
                  to="/apply-health"
                  className="hover:text-foreground transition"
                >
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/apply-business"
                  className="hover:text-foreground transition"
                >
                  Business Registration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; 2024 Government Services Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
