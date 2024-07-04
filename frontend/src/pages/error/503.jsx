import React from "react";
import { Link } from "react-router-dom";

const Unavailable = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-yellow-500">503</h1>
        <p className="text-2xl md:text-3xl font-light text-gray-800 mb-8">
          Sorry, the service is currently unavailable. Please try again later.
        </p>
        <Link to="/" className="text-yellow-500 hover:text-yellow-700">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default Unavailable;
