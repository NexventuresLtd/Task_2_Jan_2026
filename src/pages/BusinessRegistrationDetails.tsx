import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BusinessRegistrationDetails() {
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("currentUser");

  const handleApply = () => {
    if (!currentUser) {
      navigate("/login", {
        state: { from: { pathname: "/apply-business" } },
      });
      return;
    } else {
      navigate("/apply-business");
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
                📋 Business Registration
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Register Your Business with RDB
              </h1>

              <p className="text-lg text-white/90">
                Official business registration service provided by the Rwanda
                Development Board (RDB), allowing entrepreneurs to register
                businesses, obtain Tax IDs, and operate legally in Rwanda.
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
                  RDB Business Registration service helps entrepreneurs and
                  companies register legally in Rwanda. You can obtain a
                  business registration certificate, Federal Tax Identification
                  Number, and guidance on legal requirements to operate your
                  business smoothly.
                </p>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-semibold text-foreground">
                  Who Provides This Service
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  This service is provided by the{" "}
                  <span className="font-medium text-foreground">
                    Rwanda Development Board (RDB)
                  </span>
                  , the government agency responsible for promoting business,
                  investment, and economic development in Rwanda.
                </p>
              </div>

              <div className="card-elevated p-8">
                <h2 className="text-2xl font-semibold text-foreground">
                  How to Get Help
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  If you encounter any issues during application or need
                  guidance, contact RDB through the provided channels or visit
                  the nearest RDB office. Assistance is available for both new
                  and existing businesses.
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
                  Rwanda Development Board (RDB) Headquarters
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
                  📧 Email: info@rdb.rw
                  <br />
                  🌐 Website: www.rdb.rw
                </p>
              </div>

              <div className="card-elevated p-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Ready to register your business?
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
