import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApplicationProvider } from "./context/ApplicationContext";
import Home from "./pages/Home";
import "./styles/global.css";
import ScrollToHash from "./components/ScrollToHash";

// Lazy load application forms and dashboard for better performance
const ApplyNationalID = lazy(() => import("./pages/ApplyNationalID"));
const ApplyHealth = lazy(() => import("./pages/ApplyHealth"));
const ApplyBusiness = lazy(() => import("./pages/ApplyBusiness"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ApplicationDetails = lazy(() => import("./pages/ApplicationDetails"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

export default function App() {
  return (
    <ApplicationProvider>
      <Router>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/apply-national-id"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <ApplyNationalID />
              </Suspense>
            }
          />
          <Route
            path="/apply-health"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <ApplyHealth />
              </Suspense>
            }
          />
          <Route
            path="/apply-business"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <ApplyBusiness />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/applications/:id"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <ApplicationDetails />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </ApplicationProvider>
  );
}
