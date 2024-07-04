import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "/src/components/Sidebar";
import Navbar from "/src/components/Navbar";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {token ? (
        <>
          <div className="flex h-screen bg-gray-100">
            <Sidebar isOpen={isOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Navbar toggleSidebar={toggleSidebar} />
              <main className="flex-1 overflow-y-auto p-4">
                <Outlet />
              </main>
            </div>
          </div>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Layout;
