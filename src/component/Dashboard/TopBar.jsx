import React from "react";
import { FiCalendar } from "react-icons/fi";

const TopBar = () => {
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
      <div className="flex items-center justify-between p-0.2">
        <div>
          <span className="text-sm font-bold block">
            🚀 Good morning, Shelly!
          </span>
          <span className="text-xs block text-stone-500">
            Wednesday, Jul 17th 2024
          </span>
        </div>

        <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded">
          <FiCalendar />
          <span>Prev 6 Months</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
