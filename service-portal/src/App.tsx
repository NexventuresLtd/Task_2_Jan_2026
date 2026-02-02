import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ApplyService = lazy(() => import("./pages/ApplyService"));
import { applications as data } from "./data/mockApplications";
import type { Application } from "./types/application";
function App() {
  const [applications, setApplications] = useState<Application[]>(()=>{
    try {
      const stored = localStorage.getItem("applications");
      return stored? JSON.parse(stored):data
    } catch (error) {
      return data
    }
    
  });
  useEffect(()=>{
    localStorage.setItem('applications',JSON.stringify(applications))
  },[applications])
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <div className="w-full max-w-5xl mx-auto px-4">
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
          </Routes>
        </div>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
