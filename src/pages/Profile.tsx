import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface User {
  fullName: string;
  email: string;
  password: string;
}

export default function Profile() {
  const navigate = useNavigate();

  // ✅ SAFE read (no redirect here)
  const storedUser = localStorage.getItem("currentUser");
  const user: User | null = storedUser ? JSON.parse(storedUser) : null;

  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [password, setPassword] = useState("");

  // ✅ Logout ONLY happens when button is clicked
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/", { replace: true });
  };

  const handleSave = () => {
    if (!user) return;

    const updatedUser: User = {
      ...user,
      fullName,
      password: password || user.password,
    };

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setPassword("");
    setIsEditing(false);
  };

  if (!user) return null; // ProtectedRoute already handles redirect

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="section-container py-12 max-w-3xl mx-auto">
          <div className="card-elevated p-8 space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  My Profile
                </h1>
                <p className="text-muted-foreground">
                  Manage your personal information
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="btn-outline text-red-600 border-red-200 hover:bg-red-50"
              >
                Logout
              </button>
            </div>

            {/* Profile Card */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="input-field mt-2"
                  />
                ) : (
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    {user.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <p className="mt-2 text-lg text-foreground">{user.email}</p>
              </div>
            </div>

            {/* Password */}
            {isEditing && (
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  New Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field mt-2"
                  placeholder="Leave empty to keep current password"
                />
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 justify-end border-t border-border pt-6">
              {isEditing ? (
                <>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="btn-outline"
                  >
                    Cancel
                  </button>
                  <button onClick={handleSave} className="btn-primary">
                    Save Changes
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn-primary"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
