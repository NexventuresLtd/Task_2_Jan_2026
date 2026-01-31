import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NationalIDDetails() {
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("currentUser");

  const handleApply = () => {
    if (!currentUser) {
      // Redirect to login first, then come back to apply page
      navigate("/login", {
        state: { from: { pathname: "/apply-national-id" } },
      });
      return;
    } else {
      // Logged in → go directly to application form
      navigate("/apply-national-id");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20">
          <div className="section-container relative z-10">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-medium">
                🆔 National ID
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                National ID Card (NIDA)
              </h1>

              <p className="text-lg text-white/90">
                The National Identification Card issued by NIDA is essential for
                identification, voting, banking, and accessing government
                services in Rwanda.
              </p>

              <button
                onClick={handleApply}
                className="btn-primary bg-white text-primary hover:bg-white/90"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Decorative blur */}
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        </section>

        {/* CONTENT */}
        <section className="section-container py-16">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* MAIN CONTENT */}
            <div className="lg:col-span-2 space-y-10">
              <div className="card-elevated p-8">
                <h2 className="text-2xl font-semibold text-foreground">
                  What This Service Does
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  The National ID issued by NIDA serves as official proof of
                  identity, enabling citizens to access government services,
                  register for elections, open bank accounts, and verify
                  personal information.
                </p>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-semibold text-foreground">
                  Who Provides This Service
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  This service is provided by the{" "}
                  <span className="font-medium text-foreground">
                    National Identification Agency (NIDA)
                  </span>
                  , the official government body responsible for issuing
                  national identification cards in Rwanda.
                </p>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-semibold text-foreground">
                  How to Get Help
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  If you encounter issues during your application or require
                  more information, contact NIDA through the provided channels
                  or visit the nearest NIDA branch.
                </p>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="space-y-6">
              <div className="card-elevated p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  Office Location
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  NIDA Headquarters
                  <br />
                  Kacyiru, Gasabo District
                  <br />
                  Kigali, Rwanda
                </p>
              </div>

              <div className="card-elevated p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  Contact Information
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  📞 Phone: +250 788 123 456
                  <br />
                  📧 Email: info@nida.gov.rw
                </p>
              </div>

              <div className="card-elevated p-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Ready to apply for your National ID?
                </p>
                <button onClick={handleApply} className="btn-primary w-full">
                  Apply Now
                </button>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
