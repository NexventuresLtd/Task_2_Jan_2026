import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ApplyService = lazy(() => import("./pages/ApplyService"));
const Services = lazy(() => import("./pages/Services"));
import { applications as data } from "./data/mockApplications";
import type { Application } from "./types/application";
function App() {
  const [applications, setApplications] = useState<Application[]>(data);
  return (
    <div>
      <Header />
      <main className="flex flex-col min-h-screen grow">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <div className="text-sm mt-2 text-blue-600 text-center md:text-lg lg:text-xl">
                    Loading...
                  </div>
                }
              >
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense
                fallback={
                  <div className="text-sm mt-2 text-blue-600 text-center md:text-lg lg:text-xl">
                    Loading...
                  </div>
                }
              >
                <Dashboard
                  applications={applications}
                  setApplications={setApplications}
                />
              </Suspense>
            }
          />
          <Route
            path="/apply-service"
            element={
              <Suspense
                fallback={
                  <div className="text-sm mt-2 text-blue-600 text-center md:text-lg lg:text-xl">
                    Loading...
                  </div>
                }
              >
                <ApplyService setApplications={setApplications} />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense
                fallback={
                  <div className="text-sm mt-2 text-blue-600 text-center md:text-lg lg:text-xl">
                    Loading...
                  </div>
                }
              >
                <Services />
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
