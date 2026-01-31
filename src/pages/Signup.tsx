import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Signup() {
  const navigate = useNavigate();
  const location = useLocation();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 👇 where user was before signup
  const from = (location.state as any)?.from?.pathname;

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // prevent duplicate email
    const exists = users.some((u: any) => u.email === email);
    if (exists) {
      setError("An account with this email already exists");
      return;
    }

    const newUser = {
      id: crypto.randomUUID(),
      fullName,
      email,
      password,
    };

    // save users
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    // auto login
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    /**
     * ✅ LOGIC RULE
     * - Came from Apply → go back there
     * - Else → stay on Home
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
            Create an account
          </h2>

          {error && (
            <p className="mb-4 rounded bg-red-100 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 w-full rounded border px-3 py-2"
              />
            </div>

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
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium">
              Login
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
