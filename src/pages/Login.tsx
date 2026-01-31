import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔑 this is the key
  const from = (location.state as any)?.from?.pathname;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (u: any) => u.email === email && u.password === password,
    );

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    // Save logged-in user
    localStorage.setItem("currentUser", JSON.stringify(user));

    /**
     * ✅ LOGIC RULE
     * - If user was trying to APPLY → go back there
     * - Else → stay on current page (Home)
     */
    if (from) {
      navigate(from, { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <>
      <Header />

      <main className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Login to your account
          </h2>

          {error && (
            <p className="mb-4 rounded bg-red-100 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded border px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded bg-primary py-2 text-white hover:opacity-90"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-primary font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
