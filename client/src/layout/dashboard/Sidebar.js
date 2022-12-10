import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-indigo-200 h-[calc(100vh-25px)] p-5 rounded-lg">
      <ul className="flex gap-3  flex-col h-full">
        <li className="font-semibold text-lg overflow-hidden text-ellipsis whitespace-nowrap">
          Admin Dashboard
        </li>
        <hr />
        <li className="overflow-hidden text-ellipsis whitespace-nowrap">
          <Link to="/dashboard"> History </Link>
        </li>
        <li className="overflow-hidden text-ellipsis whitespace-nowrap">
          <Link to="blog-list">Blog List</Link>
        </li>
        <li className="overflow-hidden text-ellipsis whitespace-nowrap">
          <Link to="add-blog"> Add Blog </Link>
        </li>
        <li className="mt-auto overflow-hidden text-ellipsis whitespace-nowrap">
          <Link to="/"> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
