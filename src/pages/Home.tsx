import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/mockApplications";

export default function Home() {
  // Icons for services
  const icons = {
    "national-id": "🆔",
    "health-insurance": "🏥",
    "business-registration": "📋",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-primary relative overflow-hidden py-20 text-white sm:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl" />
          </div>

          <div className="section-container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
                    Government Services Made Easy
                  </h1>
                  <p className="text-xl text-white/90">
                    Apply for essential public services online. Fast processing,
                    transparent tracking, and secure document submission.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a href="#service" className="btn-primary">
                    Start Application
                  </a>

                  <a
                    href="/dashboard"
                    className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white hover:text-primary active:scale-95"
                  >
                    View My Applications
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl" />
                <div className="relative rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                      <span className="text-sm font-medium">Fast & Secure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                      <span className="text-sm font-medium">
                        Real-time Tracking
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                      <span className="text-sm font-medium">24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                      <span className="text-sm font-medium">
                        Transparent Process
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="service" className="py-20 sm:py-32">
          <div className="section-container">
            <div className="mb-16 space-y-4 text-center">
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
                Our Services
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Choose from our comprehensive range of government services, each
                designed to make your life easier.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  description={service.description}
                  icon={icons[service.id as keyof typeof icons]}
                  detailsHref={
                    service.id === "national-id"
                      ? "/national-id-details"
                      : service.id === "health-insurance"
                        ? "/health-details"
                        : "/business-details"
                  }
                  features={service.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary/10 py-20 sm:py-32">
          <div className="section-container text-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Complete your application in minutes and receive real-time
                updates on your status.
              </p>
              <a href="#service" className="btn-primary mx-auto">
                Apply Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
