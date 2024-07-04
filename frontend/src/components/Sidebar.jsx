import React from "react";
import { Link, NavLink } from "react-router-dom";

const navlinks = [
  {
    label: "Dashboard",
    url: "/dashboard",
  },
  {
    label: "Candidates",
    url: "/candidates",
  },
  {
    label: "Users",
    url: "/users",
  },
  {
    label: "Voting",
    url: "/voting",
  },
];
const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`bg-gray-800 text-gray-300 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
    >
      <Link
        to="/admin/dashboard"
        className="text-white flex items-center space-x-2 px-4"
      >
        <span className="text-2xl font-extrabold">Admin</span>
      </Link>
      <nav>
        {navlinks.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={`/admin${link.url}`}
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
            >
              {link.label}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
