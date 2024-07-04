import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
const Private = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      {token ? (
        <>
          <>
            <nav className="bg-gray-800 p-4 flex justify-between items-center">
              <div className="text-white text-lg font-bold">MyApp</div>
              <button
                onClick={onLogout}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                Logout
              </button>
            </nav>
            <Outlet />
          </>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Private;
