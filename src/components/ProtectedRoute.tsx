import { Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();
  const currentUser = localStorage.getItem("currentUser");

  if (!currentUser) {
    // Redirect to login and remember current page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
