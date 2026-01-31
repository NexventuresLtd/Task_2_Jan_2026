import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Documentation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20">
          <div className="section-container relative z-10">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-medium">
                📘 Documentation
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                GovConnect User Guide
              </h1>

              <p className="text-lg text-white/90">
                Learn how to use GovConnect, apply for government services,
                track applications, and solve common issues.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        </section>

        {/* CONTENT */}
        <section className="section-container py-16 space-y-12">
          {/* Getting Started */}
          <div className="card-elevated p-8">
            <h2 className="text-2xl font-semibold text-foreground">
              🚀 Getting Started
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              GovConnect is a digital platform that allows citizens to apply for
              government services online, track application status, and manage
              their profile in one place.
            </p>

            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li>• Create an account using Signup</li>
              <li>• Login to access protected services</li>
              <li>• Apply for services from the Home page</li>
              <li>• Track applications in the Dashboard</li>
            </ul>
          </div>

          {/* How to Apply */}
          <div className="card-elevated p-8">
            <h2 className="text-2xl font-semibold text-foreground">
              📝 How to Apply for Services
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground">
                  🆔 National ID
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Apply for a National ID through NIDA by filling personal
                  information and submitting the form.
                </p>
              </div>

              <div className="rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground">
                  🏥 Health Insurance
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Register for RSSB Mutuelle de Santé and get access to national
                  healthcare services.
                </p>
              </div>

              <div className="rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground">
                  📋 Business Registration
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Register your business with RDB and receive legal business
                  documentation.
                </p>
              </div>
            </div>
          </div>

          {/* Dashboard */}
          <div className="card-elevated p-8">
            <h2 className="text-2xl font-semibold text-foreground">
              📊 Dashboard Overview
            </h2>
            <p className="mt-4 text-muted-foreground">
              The dashboard allows you to:
            </p>

            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• View all submitted applications</li>
              <li>
                • Track application status (Under Review, Approved, Rejected)
              </li>
              <li>• View application details</li>
              <li>• Apply for more services</li>
            </ul>
          </div>

          {/* Profile */}
          <div className="card-elevated p-8">
            <h2 className="text-2xl font-semibold text-foreground">
              👤 Profile Management
            </h2>
            <p className="mt-4 text-muted-foreground">
              Your profile page allows you to:
            </p>

            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• View your full name and email</li>
              <li>• Edit your full name</li>
              <li>• Change your password</li>
              <li>• Logout securely</li>
            </ul>
          </div>

          {/* Common Issues */}
          <div className="card-elevated p-8">
            <h2 className="text-2xl font-semibold text-foreground">
              ⚠️ Common Issues & Solutions
            </h2>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-medium text-foreground">
                  I cannot access Dashboard or Profile
                </h4>
                <p className="text-sm text-muted-foreground">
                  Ensure you are logged in. Protected pages require an active
                  session.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-foreground">
                  My application status is not changing
                </h4>
                <p className="text-sm text-muted-foreground">
                  Application status updates sequentially. Please wait for
                  notifications or check the dashboard.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-foreground">
                  I logged out accidentally
                </h4>
                <p className="text-sm text-muted-foreground">
                  Simply log in again using your email and password.
                </p>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="card-elevated p-8">
            <h2 className="text-2xl font-semibold text-foreground">
              🔐 Security & Privacy
            </h2>
            <p className="mt-4 text-muted-foreground">
              GovConnect values your privacy. Your data is stored securely and
              used only for service processing. Always log out on shared
              devices.
            </p>
          </div>

          {/* Support */}
          <div className="card-elevated p-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground">
              📞 Need More Help?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Contact the responsible institution or visit their official
              offices for assistance.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
