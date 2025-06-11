import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    // fallback page for invalid routes
    <div className="flex flex-col items-center justify-center h-[70vh] text-center p-4">
      <AlertTriangle className="w-16 h-16 text-[var(--error-color)] mb-4" />
      <h1 className="text-3xl font-bold text-[var(--text-color)] mb-2">
        404 - Page Not Found
      </h1>
      <p className="text-[var(--subtext-color)] mb-4">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-[var(--primary-color)] text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
