import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ menu }) => {
  return (
    <nav className="w-[300px]">
      <ul className="h-full p-5 bg-gray-200 space-y-4">
        <li className={`px-2 py-1 ${menu === "children" ? "bg-red-400" : ""}`}>
          <Link to="/children">Children</Link>
        </li>
        <li className={`px-2 py-1 ${menu === "parent" ? "bg-red-400" : ""}`}>
          <Link to="/parent">Parent</Link>
        </li>
        <li className={`px-2 py-1`}>
          <Link to="/report">Reports</Link>
        </li>
        <li className={`px-2 py-1`}>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
