import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-7xl font-bold text-red-500">404</h1>

      <h2 className="text-2xl font-semibold mt-4"> Page Not Found </h2>

      <p className="text-gray-600 mt-2"> The page you are trying to access does not exist. </p>

      <p className="mt-2 text-sm text-gray-500"> 
      Requested URL: <span className="font-mono">{location.pathname}</span>
      </p>

      <Link to="/" className="mt-6 bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600" >
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
