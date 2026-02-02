import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t mt-20 border-blue-100">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <h2 className="text-lg font-semibold text-blue-600 md:text-xl">
              Government Service
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Email: government@service.com
            </p>
            <p className="text-sm text-gray-700">Phone: +250 722 029 401</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-700">
              <li>
                <Link to="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-blue-600">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/apply-service" className="hover:text-blue-600">
                  Apply
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-900">Legal</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-700">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-blue-100 pt-4">
          <p className="text-center text-xs text-gray-600">
            © {new Date().getFullYear()} Government Service. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
