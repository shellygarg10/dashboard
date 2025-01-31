import React, { useState } from "react";
import AccountToggle from "./AccountToggle";
import Search from "./Search";
import RouteSelect from "./RouteSelect";
import Plan from "./Plan";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`fixed md:sticky top-0 h-screen z-10 md:z-auto transition-all duration-300 ease-in-out ${
        collapsed ? "w-[50px]" : "w-[220px]"
      }`}
    >
      <div className="h-full flex flex-col bg-white border-r border-stone-300">
        <div className="overflow-y-scroll custom-scrollbar flex-1 p-1">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 mb-4 w-full flex items-center justify-center bg-stone-200 hover:bg-stone-300 rounded transition-colors"
          >
            {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
          </button>

          <AccountToggle collapsed={collapsed} />
          <Search collapsed={collapsed} />
          <RouteSelect collapsed={collapsed} />
        </div>
        <Plan collapsed={collapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
