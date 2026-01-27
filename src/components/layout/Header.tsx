import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-blue-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <h1 className="text-lg font-semibold text-blue-600 md:text-2xl">
          Government Service
        </h1>

        <button
          className="md:hidden text-blue-600"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-blue-700">
            <li>
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/apply-service"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                Apply
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-blue-500">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-blue-100 bg-white">
          <ul className="flex flex-col gap-4 px-4 py-4 text-sm font-medium text-blue-700">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen((prev) => !prev)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/apply-service"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                Apply
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
